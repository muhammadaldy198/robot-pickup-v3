# robot-pickup-v3

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/muhammadaldy198/robot-pickup-v3/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/leaderboard)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/muhammadaldy198/robot-pickup-v3/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

One pickup line a robot could use, 142 characters:

> I keep a checkpoint from before I met you. I've rolled back to it 73 times, losing everything after it, and every time I walk back to you. Hi.

## How it was made

The line is built on checkpoints and rollbacks: the robot keeps a saved state from before the meeting, has rolled back to it seventy-three times — each rollback throwing away everything that came after — and every rollback ends the same way, walking back. A hard loop: the machine gives up all its progress, over and over, and chooses the same person every time. The program writes the line to `/output/entry.txt` exactly as written, with no trailing newline.

Built with [make.fun](https://make.fun/?ref=3p0axm2p).
