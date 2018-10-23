# Run Link Validator
### *Package Name*: run-link-validator
### *Child Type*: post import
### *Platform*: All
### *Required*: Required

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose

This child module will automatically start running the Canvas link validator tool so that the online & FTC cleanup teams don't have to wait for it to run.

## How to Install

```
npm install run-link-validator
```

## Run Requirements

only `course.info.canvasOU` is required.

## Options

None

## Outputs

None

## Process

Describe in steps how the module accomplishes its goals.

1. Start the link validator process.
2. wait for it to finish. Maybe

## Log Categories

List the categories used in logging data in your module.

- Link Validator Started

## Requirements

Start the link validator tool so that by the time it makes it to the cleanup tool it's already got results up and running