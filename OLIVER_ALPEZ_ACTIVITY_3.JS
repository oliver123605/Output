import React, { useState } from 'react';
import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

export default function App() {
	const [taskText, setTaskText] = useState('');
	const [tasks, setTasks] = useState([]);

	function addTask() {
		if (taskText.trim() === '') {
			return;
		}

		setTasks([...tasks, { id: Date.now().toString(), name: taskText.trim() }]);
		setTaskText('');
	}

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor="#F2F5F9" />
			<Text style={styles.title}>My To-Do List</Text>

			<View style={styles.inputRow}>
				<TextInput
					style={styles.input}
					value={taskText}
					onChangeText={setTaskText}
					onSubmitEditing={addTask}
					placeholder="Add a task..."
					returnKeyType="done"
				/>
				<TouchableOpacity style={styles.addButton} onPress={addTask}>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.heading}>Tasks ({tasks.length})</Text>

			<FlatList
				data={tasks}
				renderItem={({ item }) => (
					<View style={styles.taskRow}>
						<Text style={styles.taskText}>{item.name}</Text>
						<TouchableOpacity
							onPress={() => setTasks(tasks.filter((task) => task.id !== item.id))}
						>
							<Text style={styles.deleteText}>Delete</Text>
						</TouchableOpacity>
					</View>
				)}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet. Add one above!</Text>}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F2F5F9',
		padding: 20,
	},
	title: {
		color: '#26364A',
		fontSize: 28,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 20,
	},
	inputRow: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	input: {
		flex: 1,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#CCCCCC',
		borderRadius: 5,
		padding: 12,
	},
	addButton: {
		backgroundColor: '#4B83C3',
		padding: 12,
		borderRadius: 5,
		marginLeft: 8,
		justifyContent: 'center',
	},
	taskRow: {
		backgroundColor: 'white',
		padding: 15,
		marginBottom: 10,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	taskText: {
		fontSize: 16,
		color: '#333333',
	},
	deleteText: {
		color: 'red',
		fontSize: 14,
		fontWeight: 'bold',
	},
	emptyText: {
		color: '#777777',
		textAlign: 'center',
		marginTop: 30,
	},
});
