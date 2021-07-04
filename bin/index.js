#! /usr/bin/env node
const { exec } = require('child_process')
const os = require('os')
if (os.platform() === "darwin") {
    exec('pmset -g batt | grep -Eo "\\d+%" | cut -d% -f1', function(error, stdout, stderr) {
        if (error) {
            console.log(error)
            return
        }
        if (stderr) {
            console.log(stderr)
            return
        }
        console.log(stdout)
    })
} else {
    console.log("Invalid platform!")
}