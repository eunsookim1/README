# Vim
Another code editor that has been around since 1991 and its power users still give major editors a run for their money. 

Useful in editing a file in a remote ssh terminal. 

> Vim is also the default editor for git -- it launches vim when it needs additional text from you, such as a commit message. 

<br>
<br>


## Vim modes
Vim operates in two modes - `edit` and `command` mode. Edit mode is the state in which the keys I type on are actually inserted into my document, whereas the command mode allows me to navigate through the document, search and replace text, copy and paste, etc. By default, when I open a file, I'm placed in command mode. 

<br>

## Moving around
I can use the `H, K, J and L` keys to move around. But arrow keys are also useable. 


| --     | H        | K        | J        | L        |
|:------:| :------: | :------: | :------: | :------: |
|moves   | left     | up       | right    | down     |

## Exiting Vim
1. Save and exit: `:wq`
2. Exit without saving: `:q`
3. Save and exit multiple files: `:wqa`

When currently in insert mode, press `Esc` key. This will return me to normal mode, where I can use one of the three above.  

<br>

## Tips for Exiting Vim
1. `:wq` or `:q!` to save or discard changes
2. use `:help` or `:help :wq`for any clarifications and finding specific commands. 

>VIM launches into the command mode by default.

<br>

## Editing Mode
To swithc to **edit mode** (insert mode) 
* Press "i" to begin inserting text at the current cursor position.
* Press "a" to begin inserting after the current cursor position. 

## Command Mode
* Use Esc key to switch back to command mode from editing mode.
* Y copies a line of text to the buffer.
* P pastes it to the cursor's current position.
* dd will delete the whole line of text. This will also effectively "cut" a line of text as well. When you delete a line, it's placed in the buffer.
* yy copies a whole line of text.

>Vim buffer? It's Vim's unique abstraction not found in other editors / IDEs. A buffer is a temporary space in the memory to store your opened file(s). Each time you open a file, Vim stores it in a buffer; if you open 5 files, you have 5 buffers. 

## Saving a File
* Make sure I'm in command mode. Use escape key to make sure.
* type `:w`

>[vim cheat sheet](http://www.viemu.com/vi-vim-cheat-sheet.gif)

![vim cheat sheet](vimcheatsheet.png)

![Alt text](http://www.viemu.com/vi-vim-cheat-sheet.gif "a sheet")

![Alt text](https://assets.digitalocean.com/articles/alligator/boo.svg)(https://digitalocean.com)
