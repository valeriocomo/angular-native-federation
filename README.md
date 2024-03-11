# Angular Native Federation

### A tiny example of a micro frontend application based on Native Federation.

If you like it, support me.

<a href="https://www.buymeacoffee.com/valeriocomo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


## Setup

You can choose to run it or via devcontainer or directly on your machine.

If devcointainer is your choice, remember to:

- run *docker*

- open the root folder of the project with *VSCode*

- install *devcontainer* remote extension

- from command palette, search and select ```Open in container```

Otherwise, do these actions:

- install nodejs (v20) and npm

- open the root folder of the project with VSCode

- install deps with npm 

## Run

In order to run the entire app open up two terminals in vscode.

In the first, run:

```nx run-many -target serve -p app-shell mf1 mf2 ```

In the second one, run:

```nx serve api-api```


