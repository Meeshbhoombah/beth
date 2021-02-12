pragma solidity >=0.4.0 <=0.8.0;

/// @title Chorable game implementation for ETH Denver 2021
/// Rohan Mishra, Gil Gerard Austria, Sapna Srinivasan
/// @notice This contract is utilized to set metadata for the chorable game
contract Chorable {

	struct User {
		//user name
		string name;
		
		//unique identifier also number of user added to game.
		uint uid;

		//roomCodes that user belongs too
		uint[] roomCodes;

		//taskIds of tasks that this user is working
		uint[] taskIds;
	}

	struct Room {
		//internal unique identifier for room
		uint roomCode;
		
		//name of the room
		string name;
		
		//unique identifier for the users attached to the room.
		uint[] userIds;
	
	}

	struct Task {
		//unique task identifier
		uint taskId;
		//userId of user that task belongs too
		uint userId;
		//room code that task belongs too
		uint roomCode;
	}

	struct Pool {
		string ETHtotal;
	}

	//mapping of room code to room
	mapping (uint => Room) private rooms;
	
	//mapping of addresses to User
	mapping (address => User) private users;
	
	//mapping of task ids to task
	mapping (uint => Task) private tasks;
	
	//total amount of users playign the game
	uint private totalUsers;
	
	//private counter of total tasks ever created
	uint private totalTasks;
	
	// private counter of total rooms
	uint private totalRooms;

	modifier roomCodeExists (uint _roomCode) {
		require(rooms[_roomCode] != 0);
		_;
	}

	modifier userExists (address _addr) {
		require(users[_addr] != 0);
		_;
	}
	
	modifier taskExists (uint _taskId) {
		require(tasks[_taskId] != 0);
		_;
	}


	function isRegistered(address _addr, string memory _name) returns(string) {
		User memory user = users[addr];
		if(user == 0) {
			totalUsers++;
			users[_addr] = User(_name, totalUsers, , );
			return "Registered new User";
		}
		else {
			return users.name;
		}
	}

	// Returns user id and room id
	function joinRoom(address _addr, uint _roomCode) public roomCodeExists(_roomCode) userExists(_addr) returns (string) {
		users[_addr].roomCodes.push(rooms[_roomCode].roomCode);
		rooms[_roomCode].userIds.push(users[_addr].uid);
	}	

	function createRoom(uint _roomCode, string memory name) {
		require(rooms[_roomCode] == 0);
		totalRooms++;
		rooms[_roomCode] = Room(roomCode, name, );
	}
	
	/*
	* Returns a Task [] of all the tasks this user has. Returns == 0 if no tasks exist.
	*/
	function getTasks (address _addr) userExists(_addr){
		Task[] memory task;
		for(int i = 0; i < users[addr].taskIds.length; i++) {
			task.push(tasks[users[addr].taskIds[i]]);
		}
		return task;
	}
	
	/*
	* Returns a Room [] of all the rooms this user belongs to. Return == 0 if no tasks exist.
	*/
	function getRooms (address _addr) userExists(_addr) {
		Room[] memory room;
		for(int i == 0; i < users[_addr].roomCodes.length; i++) {
			room.push(rooms[users[_addr].roomCodes[i]);
		}
		return room;
	}
	
	/*
	* Creates a task with uinque taskId passed in, and ties it to the room of the room id passed in. Execution will fail to run if task Id exists or room Id doesn't exist. 
	*/
	function createTask (uint _taskId, uint _roomId) public roomCodeExists(_roomId) {
		require(tasks[_taskId] == 0);
		totalTasks++;
		tasks[_taskId] = Task(_taskId, , _roomId); 
	}
	
	//funcitonality needed:
		//
	
}
