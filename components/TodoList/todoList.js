import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class TodoList extends Component {
  state = {
    tasks: [],
    newTask: '',
  };

  addTask = () => {
    if (this.state.newTask !== '') {
      const newTasks = [
        ...this.state.tasks,
        {taskName: this.state.newTask, completed: false},
      ];
      this.setState({tasks: newTasks, newTask: ''});
    }
  };

  completeTask = index => {
    const tasks = [...this.state.tasks];
    tasks[index].completed = !tasks[index].completed;
    this.setState({tasks});
  };

  deleteTask = index => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({tasks});
  };
  retrieveData = async () => {
    const tasks = await AsyncStorage.getItem('@MyApp:tasks');
    if (tasks != null) {
      this.setState({tasks: JSON.parse(tasks)});
    }
  };
  storeData = async () => {
    await AsyncStorage.setItem(
      '@MyApp:tasks',
      JSON.stringify(this.state.tasks),
    );
  };
  componentDidMount() {
    this.retrieveData();
  }
  componentDidUpdate() {
    this.storeData();
  }
  render() {
    const {tasks, newTask} = this.state;

    // Sort the tasks array by completed status
    const sortedTasks = tasks.sort((a, b) => {
      // Move completed tasks to the end of the array
      if (a.completed && !b.completed) {
        return 1;
      } else if (!a.completed && b.completed) {
        return -1;
      } else {
        return 0;
      }
    });

    return (
      <View style={styles.container}>
        <Text style={styles.header}>To-Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newTask}
            onChangeText={text => this.setState({newTask: text})}
            placeholder="Enter a task"
            placeholderTextColor={'#213255'}
          />
          <TouchableOpacity style={styles.addButton} onPress={this.addTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.taskList}>
          {sortedTasks.map((task, index) => (
            <View key={index} style={styles.taskContainer}>
              <TouchableOpacity
                style={styles.circleButton}
                onPress={() => this.completeTask(index)}>
                <Text style={styles.circleButtonText}>
                  {task.completed ? '✅' : ''}
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.taskText,
                  {
                    textDecorationLine: task.completed
                      ? 'line-through'
                      : 'none',
                  },
                ]}>
                {task.taskName}
              </Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => this.deleteTask(index)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f1f6fb',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#213255',
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#8a8a8a',
    marginRight: 8,
    paddingLeft: 8,
    color: '#333',
    borderRadius: 4,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingHorizontal: 16,
    height: 40,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  taskList: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    marginRight: 8,
  },
  circleButtonText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    paddingHorizontal: 16,
  },
  deleteButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoList;
