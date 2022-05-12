# League of Legends Champion Skin Project

## Overview

For my end of Foundations project at DevMountain, I decided to take something I had already been doing, and turn it into a website! I've been
playing League of Legends for years. Every month, they come out with a few new skins for a few of their champions. I really enjoyed seeing which
champions hadn't gotten one in a while and which ones were due for some love from the game creators. I did all that on a Google Doc. Now, it's all done
on this website!

You can view the full project demo here: https://youtu.be/hM1B70EHdvA

## Functionality

Using axios GET requests, each champion is displayed from my made-from-scratch SQL database to the front end. The date at the top of each card indicates
when they last received a skin. Then, their name is displayed as well as their picture and how many skins they have. In the database, everything is ordered in alphabetical
order, whereas on the site, it's ordered by last-skin-received - or the date. 

By pressing the "Add Skin" button, users can select an existing champion from the dropdown and select the date on which they received their new skin. Once submitted,
the list will update and place that champion at the bottom of the list.

The champion at the top of the list will always have their picture and name showcased at the top of the page.

By pressing the "Add Champion" button, users can add a new champion to the list along with their release date, how many skins they were released with, and a picture that
will automatically be formatted to match the rest of the champions.

If users mess up, they can alwasy delete one of the cards by clicking on the little 'x' on the upper right hand corner of each champion card.

There are also helpful buttons always handily available at the bottom of the page to jump to the top or bottom of the list.
