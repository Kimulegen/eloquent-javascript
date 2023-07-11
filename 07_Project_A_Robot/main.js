/***************
   MEADOWFIELD
****************/
const roads = [
   "Alice's House-Bob's House",
   "Alice's House-Cabin",
   "Alice's House-Post Office",
   "Bob's House-Town Hall",
   "Daria's House-Ernie's House",
   "Daria's House-Town Hall",
   "Ernie's House-Grete's House",
   "Grete's House-Farm",
   "Grete's House-Shop",
   "Marketplace-Farm",
   "Marketplace-Post Office",
   "Marketplace-Shop",
   "Marketplace-Town Hall",
   "Shop-Town Hall",
];

// Creates a map object that stores an array of connected
// nodes.
function buildGraph(roads){
   let graph = Object.create(null)

   roads.forEach(road => {
      let [from, to] = road.split("-")
      addPath(graph,from, to)
      addPath(graph,to, from)
   })

   return graph
}

function addPath(graph, from, to) {
   if (graph[from] === undefined) {
      graph[from] = [to]
   } else {
      graph[from].push(to)
   }
}

const roadGraph = buildGraph(roads)

/***************
   THE TASK
****************/
class VillageState {
   constructor(place, parcels) {
      this.place = place
      this.parcels = parcels
   }

   move(destination) {
      if(!roadGraph[this.place].includes[destination]) {
         return this
      } else {
         let parcels = this.parcels.map(parcel => {
            if (parcel.place !== this.place) {
               return parcel
            }
            return {place: destination, address: parcel.address}
         }).filter(parcel => parcel.place !== parcel.address)
         return new VillageState(destination,parcels)
      }
   }
}


/***************
   SIMULATION
****************/
function runRobot(state, robot, memory) {
   for (let turn = 0; ; turn++) {
      if (!state.parcels.length) {
         console.log(`Done in ${turn} turns`)
         break;
      }
      let action = robot(state, memory) 
      state - state.move(action.direction)
      memory = action.memory
      console.log(`Moved to ${action.direction}`)
   }
}

function randomPick(array) {
   let choice = Math.floor(Math.random() * array.length)
   return array[choice]
}

function randomRobot(state) {
   return {direction: randomPick(roadGraph[state.place])}
}

VillageState.random = function (parcelCount =5) {
   let parcels = []
   for(let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph))
      let place
      do {
         place = randomPick(Object.keys(roadGraph))
      } while (place === address) {
         parcels.push({place, address})
      }

      return new VillageState('Post Office', parcels)
   }
}
/**************************
   THE MAIL TRUCK'S ROUTE
***************************/
/***************
   PATHFINDING
****************/
