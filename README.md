# **Command Line Dictionary Tool**

A command-line dictionary tool using node js.

## Demo

<img src="https://github.com/shindesharad71/Node-CLI-Word-Directory-App/blob/master/assets/demo-1.png?raw=true" width="70%" alt="Demo" title="Demo">

## Setup

1. Clone or Download Code
2. `cd` to project folder
3. run `npm i` to install all the dependencies.
4. Rename `apiKey.example.js` to `apiKey.js` and Add _API KEY_.

## Features

The command-line tool has the following functions -

**1. Word Definitions**

`./dict defn <word>`

Display definitions of a given word.

**2. Word Synonyms**

`./dict syn <word>`

Display synonyms of a given word.

**3. Word Antonyms**

`./dic ant <word>`

Display antonyms of a given word. Note that not all words would have Antonyms (End point: /relatedWords). Example words with antonyms: single, break, start.

**4. Word Examples**

`./dict ex <word>`

Display examples of usage of a given word in a sentence.

**5. Word Full Dict**

`./dict <word>`

Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a given word.

**6. Word of the Day Full Dict**

`./dict`

Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a random word.

**7. Word Game**

`./dict play`

The command should display a definition, a synonym or an antonym and ask the user to guess the word.
