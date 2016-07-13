### __Emoji__ for Blogger :grinning: (`emojied.js`)
##### Replace emoji shortcuts with emoji unicode values

#### Little about `emojied.js`
`emojied.js` is a simple javascript script, that scans a text and replaces emoji shortcuts ( `:grin:` ) with their unicode representaion (`&#x1F601;`), So you don't need to remember the numbers.

#### How it works
`emojied.js` simply uses regex to find and replace.

#### Usage
[1] add `emojied.js` to the blogger template (or any other site)
```html
<script src="emojied.js"></script>
```
[2] add onload attribute to the body tag (here `setemoji()` is the core function)
```html
<body onload="setemoji()">
...
</body>
```
[3] _OR_ if you have jQuery use this:
```javascript
$(document).ready(function() {
  setemoji();
});
```
[4] And then finally when you need to display an emoji type the shortcut between a `div` element which has an ID: `emojis`
```html
<div id="emojis">
Here is a sample text :sunglasses:
</div>
```
This will result the following:

> Here is a sample text :sunglasses:

## Emoji Code Sheet
-

| emoji code | unicode value |
|:----------:|:-------------:|
|`:grinning:`|&#x1F600;|
|`:grin:`|&#x1F601;|
|`:joy:`|&#x1F602;|
|`:smiley:`|&#x1F603;|
|`:smile:`|&#x1F604;|
|`:sweat_smile:`|&#x1F605;|
|`:laughing:`|&#x1F606;|
|`:innocent:`|&#x1F607;|
|`:smiling_imp:`|&#x1F608;|
|`:wink:`|&#x1F609;|
|`:blush:`|&#x1F60A;|
|`:yum:`|&#x1F60B;|
|`:relieved:`|&#x1F60C;|
|`:heart_eyes:`|&#x1F60D;|
|`:sunglasses:`|&#x1F60E;|
|`:smirk:`|&#x1F60F;|
|`:neutral_face:`|&#x1F610;|
|`:expressionless:`|&#x1F611;|
|`:unamused:`|&#x1F612;|
|`:sweat:`|&#x1F613;|
|`:pensive:`|&#x1F614;|
|`:confused:`|&#x1F615;|
|`:confounded:`|&#x1F616;|
|`:kissing:`|&#x1F617;|
|`:kissing_heart:`|&#x1F618;|
|`:kissing_smiling_eyes:`|&#x1F619;|
|`:kissing_closed_eyes:`|&#x1F61A;|
|`:stuck_out_tongue:`|&#x1F61B;|
|`:stuck_out_tongue_winking_eye:`|&#x1F61C;|
|`:stuck_out_tongue_closed_eyes:`|&#x1F61D;|
|`:disappointed:`|&#x1F61E;|
|`:worried:`|&#x1F61F;|
|`:angry:`|&#x1F620;|
|`:rage:`|&#x1F621;|
|`:cry:`|&#x1F622;|
|`:persevere:`|&#x1F623;|
|`:triumph:`|&#x1F624;|
|`:disappointed_relieved:`|&#x1F625;|
|`:frowning:`|&#x1F626;|
|`:anguished:`|&#x1F627;|
|`:fearful:`|&#x1F628;|
|`:weary:`|&#x1F629;|
|`:sleepy:`|&#x1F62A;|
|`:tired_face:`|&#x1F62B;|
|`:grimacing:`|&#x1F62C;|
|`:sob:`|&#x1F62D;|
|`:open_mouth:`|&#x1F62E;|
|`:hushed:`|&#x1F62F;|
|`:cold_sweat:`|&#x1F630;|
|`:scream:`|&#x1F631;|
|`:astonished:`|&#x1F632;|
|`:flushed:`|&#x1F633;|
|`:sleeping:`|&#x1F634;|
|`:dizzy_face:`|&#x1F635;|
|`:no_mouth:`|&#x1F636;|
|`:mask:`|&#x1F637;|
|`:smile_cat:`|&#x1F638;|
|`:joy_cat:`|&#x1F639;|
|`:smiley_cat:`|&#x1F63A;|
|`:heart_eyes_cat:`|&#x1F63B;|
|`:smirk_cat:`|&#x1F63C;|
|`:kissing_cat:`|&#x1F63D;|
|`:pouting_cat:`|&#x1F63E;|
|`:crying_cat_face:`|&#x1F63F;|
|`:weary_cat_face:`|&#x1F640;|
|`:slight_frown:`|&#x1F641;|
|`:slight_smile:`|&#x1F642;|
|`:upside_down:`|&#x1F643;|
|`:rolling_eyes:`|&#x1F644;|
|`:person_no_good_gesture:`|&#x1F645;|
|`:person_ok:`|&#x1F646;|
|`:person_bowing_deeply:`|&#x1F647;|
|`:see_no_evil_monkey:`|&#x1F648;|
|`:hear_no_evil_monkey:`|&#x1F649;|
|`:speak_no_evil_monkey:`|&#x1F64A;|
|`:person_raised_hand:`|&#x1F64B;|
|`:person_raised_hands:`|&#x1F64C;|
|`:person_frowning:`|&#x1F64D;|
|`:person_pouting:`|&#x1F64E;|
|`:person_folded_hands:`|&#x1F64F;|

