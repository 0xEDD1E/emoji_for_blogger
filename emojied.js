/**
 * Created by 0xEDD1E on 2016-07-05.
 */

//document.getElementsByTagName('body')[0].onload = setemoji();
/*
$(document).ready(function() {
   setemoji();
});*/

function setemoji() {
    var emojis = [
        /:grinning:/g,
        /:grin:/g,
        /:joy:/g,
        /:smiley:/g,
        /:smile:/g,
        /:sweat_smile:/g,
        /:laughing:/g,
        /:innocent:/g,
        /:smiling_imp:/g,
        /:wink:/g,
        /:blush:/g,
        /:yum:/g,
        /:relieved:/g,
        /:heart_eyes:/g,
        /:sunglasses:/g,
        /:smirk:/g,
        /:neutral_face:/g,
        /:expressionless:/g,
        /:unamused:/g,
        /:sweat:/g,
        /:pensive:/g,
        /:confused:/g,
        /:confounded:/g,
        /:kissing:/g,
        /:kissing_heart:/g,
        /:kissing_smiling_eyes:/g,
        /:kissing_closed_eyes:/g,
        /:stuck_out_tongue:/g,
        /:stuck_out_tongue_winking_eye:/g,
        /:stuck_out_tongue_closed_eyes:/g,
        /:disappointed:/g,
        /:worried:/g,
        /:angry:/g,
        /:rage:/g,
        /:cry:/g,
        /:persevere:/g,
        /:triumph:/g,
        /:disappointed_relieved:/g,
        /:frowning:/g,
        /:anguished:/g,
        /:fearful:/g,
        /:weary:/g,
        /:sleepy:/g,
        /:tired_face:/g,
        /:grimacing:/g,
        /:sob:/g,
        /:open_mouth:/g,
        /:hushed:/g,
        /:cold_sweat:/g,
        /:scream:/g,
        /:astonished:/g,
        /:flushed:/g,
        /:sleeping:/g,
        /:dizzy_face:/g,
        /:no_mouth:/g,
        /:mask:/g,
        /:smile_cat:/g,
        /:joy_cat:/g,
        /:smiley_cat:/g,
        /:heart_eyes_cat:/g,
        /:smirk_cat:/g,
        /:kissing_cat:/g,
        /:pouting_cat:/g,
        /:crying_cat_face:/g,
        /:weary_cat_face:/g,
        /:slight_frown:/g,
        /:slight_smile:/g,
        /:upside_down:/g,
        /:rolling_eyes:/g,
        /:person_no_good_gesture:/g,
        /:person_ok:/g,
        /:person_bowing_deeply:/g,
        /:see_no_evil_monkey:/g,
        /:hear_no_evil_monkey:/g,
        /:speak_no_evil_monkey:/g,
        /:person_raised_hand:/g,
        /:person_raised_hands:/g,
        /:person_frowning:/g,
        /:person_pouting:/g,
        /:person_folded_hands:/g
    ];

    // use divs' classname instead of id for filtering emojis
    // this way user can user multiple `emojis` divs
    var emdivs = document.getElementsByClassName('emojis');

    for (var emi = 0; emi < emdivs.length; ++emi) {
        var emdiv = emdivs[emi];
        var emtext = emdiv.innerHTML;
        for (var i = 0; i < 16; ++i)
            emtext = emtext.replace(emojis[i], '&#x1F60' + i.toString(16) + ';');
        for (var j = 16; j < emojis.length; ++j)
            emtext = emtext.replace(emojis[j], '&#x1F6' + j.toString(16) + ';');
        emdiv.innerHTML = emtext;
    }

}
