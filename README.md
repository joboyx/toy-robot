## Description

Toy-Robot app where you can:
- `PLACE` it in a 5 x 5 grid.
- `MOVE` it 1 unit forward
- rotate it `LEFT` 
- rotate it `RIGHT`

Accepts input via CLI/REPL prompt using the following commands
```
PLACE <X>,<Y>,<DIRECTION> -- <X> and <Y> are integers that indicate a location on the tabletop
                          -- <X> and <Y> are coordinates in the table with 0,0 on top-right and 4,4 is at lower-right
                          -- <DIRECTION> is a string indicating which direction the robot should face
                          -- <DIRECTION> can be "NORTH", "EAST", "SOUTH", or "WEST"

MOVE                      -- Instructs the robot to move 1 square in the direction it is facing

LEFT                      -- Instructs the robot to rotate 90° anticlockwise/counterclockwise

RIGHT                     -- Instructs the robot to rotate 90° clockwise

REPORT                    -- Outputs the robot's current location on the tabletop and the direction it is facing

RESET                     -- Resets the toy robot
```

Or via REST API using the following HTTP GET endpoints.

http://localhost:3000/toy-robot/place/1/1/NORTH

http://localhost:3000/toy-robot/move

http://localhost:3000/toy-robot/left

http://localhost:3000/toy-robot/right

http://localhost:3000/toy-robot/report

http://localhost:3000/toy-robot/reset

NOTE:
- yes, all of the endpoints above should be POST ideally, except `REPORT`. But for easier access we use GET.
- since we have REST APIs, ideally we can create an Angular app that consumes these APIs so that user can interact via UI/browser instead of CLI/REPL



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Author

Joboy Jordan
