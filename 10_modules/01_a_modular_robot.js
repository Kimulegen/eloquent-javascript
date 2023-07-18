/*
   * There are the bindings that the project from Chapter 7 creates:
   *
   * `roads`
   * `buildGraph`
   * `roadGraph`
   * `VillageState`
   * `runRobot`
   * `randomPick`
   * `randomRobot`
   * `mailRoute`
   * `routeRobot`
   * `findRoute`
   * `goalOrientedRobot`
   *
   * If you were to write that project as a modular program, what modules would
   * you create? Which module would depend on which other module, and what 
   * would their interfaces look like?
   *
   * Which pieces are likely to be available prewritten on NPM? Would your prefer
   * to use an NPM package or write them yourself?
   */

'buildGraph depends on roads'
'roadGraph depends on buildGraph'
'VillageState depends on roadGraph'

'runRobot depends on robot: [randomRobot, routeRobot, goalOrientedRobot] and VillageState'
'randomRobot depends on randomPick'
'routeRobot depends on mailRoute'
'goalOrientedRobot depends on findRoute '
