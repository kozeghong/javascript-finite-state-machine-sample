import FSM from './fsm'

const fsm = new FSM()

for (const action in fsm.ACTION) {
  console.log(`I ${fsm.ACTION[action]} the door, now the door is:`, fsm.transit(fsm.ACTION[action]))
}