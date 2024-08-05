# Text File Word Counter

## Description

This application reads a file from a path (local or web address) and provides statistics about the content of the file.

## Features

- Total number of words
- Total number of letters
- Total number of spaces
- Words that repeat more than 10 times
- Selected design pattern: [Factory Method](https://refactoring.guru/design-patterns/factory-method)

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd text-file-word-counter
   ```

2. Install dependencies:

    ```sh
    npm install
    ```

## Usage

To start the application:

```sh
npm start <file-path-or-url>
```

## Build

To compile the TypeScript code to JavaScript:

```sh
npm run build
```

## Testing

To run the test suite:

```sh
npm test
```

Only the tests for the LocalFileProcessor are present, since the remote is pretty much the same, just getting the file from a remote url, I just wanted to demonstate the unit tests behaviour

## Linting

To lint the code:

```sh
npm run lint
```

## Docker

Build the Docker image:

```sh
docker build -t text-file-word-counter .
```

Run the Docker container:

```sh
docker run -it --rm -v "$(pwd)":/app text-file-word-counter file.txt
docker run -it --rm -v "$(pwd)":/app text-file-word-counter https://www.google.com/robots.txt
```
