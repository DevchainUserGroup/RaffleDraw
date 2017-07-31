# RaffleDraw
## User stories
### Epic
As an event organiser, I want to distribute prizes to participants based on a random draw so that it is faring.

#### Initialisation
1. As an admin, I can register a list of participants so that participants see their names
2. As an admin, I can register a list of prizes so that participants see the prize to win

#### Run
1. As an admin, I can run the raffle draw so that participants see the winner
2. As an admin, I can validate the winner is present so that I can give him his prize
3. As an admin, I can rerun the raffle draw if winner is not here or if winner is not interested in the prize so that prize can be distributed
4. As an admin, I can run the raffle draw until there is no more prize to win so that raffle draw game is ended

## Development

We decided that everyone work on a branch named as the slack username, so this is some useful `git` commands to start working:

Pour créer sa branche sur le repo git:

- `git clone https://github.com/DevchainUserGroup/RaffleDraw`
- `cd RaffleDraw`
- `git branch` to list existing branches
- `git checkout -b SLACK_USERNAME` to create a new branch (`-b`) and switch on it (`checkout`)
- `git branch` to ensure your are on your branch, the one with a `*` before
- `echo “build” > .gitignore` create the `.gitignore` file that list all files to not commit, starting with `build`
- `git config --global user.email "foo@bar.com"` where `foo@bar.com` is the email used on your Github.com account

When you finish your development, you can commit them:

- `git add .` to handle all files (to commit)
- `git commit -m "the goal of your commit"`
- `git push origin THE_NAME_OF_YOUR_BRANCH_AKA_SLACK_USERNAME` to upload your commit on github

### Tips

If we create a Github Issue for each User Story we can reference them in the commit message as `#ISSUEID`, for example:

- `git commit -m "#1 - Register a Participant: create the Attendee sol with unit test"`


### Environment

With @syllabus we summarized the environment as the following diagram (do not hesitate to complete/correct it):

NB: as I have not write access to the `environment` I put it there.

```
            Mac OS X──────────────────────────────────────────────────────────────────┐
            │                                                                         │
            │        $ cd vagrant                                                     │
            │        $ vagrant up   <<[ONCE]                                          │
            │        $ vagrant ssh                                                    │
            │                                                                         │
            │        VAGRANT───────────────────────────────────────────────────────┐  │
            │        │                                                             │  │
            │        │        $ cd docker                                          │  │
            │        │        $ docker image list                                  │  │
            │        │        $ make bash-truffle     <<[ONCE]                     │  │
            │        │        $ (make join-truffle)                                │  │
            │        │                                                             │  │
            │        │        TRUFFLE───────────────────────────────────────────┐  │  │
            │        │        │      $ testrpc                                  │  │  │
            │        │        │                                                 │  │  │
            │        │        │                                                 │  │  │
            │        │        │                                                 │  │  │
            │        │        └─────────────────────────────────────────────────┘  │  │
            │        │        TRUFFLE───────────────────────────────────────────┐  │  │
            │        │        │      $ truffle test                             │  │  │
            │        │        │                                                 │  │  │
            │        │        │      !! WORK / DEVELOP HERE !!                  │  │  │
            │        │        │                                                 │  │  │
            │        │        └─────────────────────────────────────────────────┘  │  │
            │        │                                                             │  │
            │        │                                                             │  │
            │        │                                                             │  │
            │        │        $ make build-geth     <<[ONCE]                       │  │
            │        │        $ make run-geth                                      │  │
            │        │                                                             │  │
            │        │        GETH──────────────────────────────────────────────┐  │  │
            │        │        │                                                 │  │  │
            │        │        │      Create a/my node available on the network. │  │  │
            │        │        │      MINING!!... So consuming CPU and storage:  │  │  │
            │        │        │                                                 │  │  │
            │        │        │      $ df -k                                    │  │  │
            │        │        │                                                 │  │  │
            │        │        └─────────────────────────────────────────────────┘  │  │
            │        │        $ make stop-geth                                     │  │
            │        │                                                             │  │
            │        └─────────────────────────────────────────────────────────────┘  │
            │                                                                         │
            └─────────────────────────────────────────────────────────────────────────┘
            
