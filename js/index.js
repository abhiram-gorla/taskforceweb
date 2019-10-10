var team_list = [
    {
        "name": 'Dasari Srikanth',
        "descp": 'President',
        "no": '9071923689',
        "fb": "https://www.facebook.com/profile.php?id=100012484546570",
        "linkedin": "https://www.linkedin.com/in/dasari-srikanth-b1779b16b",
        "img": "1.jpg",
    },
    {
        "name": 'Raunak Batar',
        "descp": 'Secretary',
        "no": '8239322461',
        "fb": "https://www.facebook.com/raunak.batar",
        "linkedin": "https://www.linkedin.com/in/raunak-batar-ba2290162",
        "img": "2.jpg",
    },
    {
        "name": 'Jesh Sanghvi',
        "descp": 'Event Coordinator',
        "no": '9611588642',
        "fb": "https://www.facebook.com/jesh.sanghvi",
        "linkedin": "https://www.linkedin.com/in/jesh-sanghvi-98b960130",
        "img": "3.jpg",
    },
    {
        "name": 'Siddhartha Pattisapu',
        "descp": 'PRISM Module Head',
        "no": '8951801883',
        "fb": "https://www.facebook.com/krishna.siddharth.3",
        "linkedin": "https://www.linkedin.com/in/siddharth-p-b-06944114a",
        "img": "4.jpg",
    },
    {
        "name": 'Manjunath Maigur',
        "descp": 'Media Module Head',
        "no": '8792623389',
        "fb": "https://www.facebook.com/manju.maigur6",
        "linkedin": "https://www.linkedin.com/in/manjunath-m-48960284",
        "img": "5.jpg",
    },
    {
        "name": 'Govind Jeevan',
        "descp": 'Alumni Support Module Head',
        "no": '9495591068',
        "fb": "https://facebook.com/govind.jeevan",
        "linkedin": "https://www.linkedin.com/in/govindjeevan/",
        "img": "6.jpg",
    },
    {
        "name": 'Arpitha Rakesh',
        "descp": 'Content Module Head',
        "no": '9611588522',
        "fb": "https://www.facebook.com/arpitha.rakesh",
        "linkedin": "https://www.linkedin.com/in/arpitha-rakesh-987275152/",
        "img": "7.jpg",
    },
    {
        "name": 'Utkarsh Patil',
        "descp": 'Website Module Head',
        "no": '9008791852',
        "fb": "https://www.facebook.com/utkarsh.patil.9659",
        "linkedin": "https://www.linkedin.com/in/utkarsh-patil/",
        "img": "8.png",
    },
    {
        "name": 'Adwaith Gautham',
        "descp": 'VCR Module Head',
        "no": '9663572932',
        "fb": "#",
        "linkedin": "https://www.linkedin.com/in/adwaitgautham1998",
        "img": "9.jpeg",
    },
    {
        "name": 'Rakshana Gunasekaran',
        "descp": 'VCR Module Co-ordinator',
        "no": '7022459091',
        "fb": "https://www.facebook.com/rakshana.gunasekaran",
        "linkedin": "https://www.linkedin.com/in/rakshana-gunasekaran-90b27435/",
        "img": "10.jpeg",
    },
    {
        "name": 'Sai Pavan Reddy Atla',
        "descp": 'PRISM Module Co-ordinator',
        "no": '8500877850',
        "fb": "https://www.facebook.com/sai.atla.58",
        "linkedin": "https://www.linkedin.com/in/saipavanreddyatla",
        "img": "11.jpeg",
    },
    {
        "name": 'Ravikiran Talawar',
        "descp": 'Media Module Co-ordinator',
        "no": '9343124054',
        "fb": "https://www.facebook.com/ravikiran.talawar.52",
        "linkedin": "#",
        "img": "12.jpg",
    },
    {
        "name": 'Yash Khivasara',
        "descp": 'Alumni Support Module Co-ordinator',
        "no": '8691818369',
        "fb": "https://www.facebook.com/yash.khivasara.2",
        "linkedin": "https://www.linkedin.com/in/yash-khivasara-39578416b",
        "img": "13.jpeg",
    },
    {
        "name": 'Nayanish Lokesh',
        "descp": 'Content Module Co-ordinator',
        "no": '6361530427',
        "fb": "https://www.facebook.com/nayanish.lokesh/",
        "linkedin": "https://www.linkedin.com/in/nayanish-lokesh-829b1917b",
        "img": "",
    },
    {
        "name": 'Abhiram Chowdary',
        "descp": 'Website Module Co-ordinator',
        "no": '8919123264',
        "fb": "https://www.facebook.com/abhiram.chowdary.334",
        "linkedin": "https://www.linkedin.com/in/gorllaabhiramchowdary",
        "img": "15.jpeg",
    },
    {
        "name": 'Shreyash Sabare',
        "descp": 'Help Desk Head',
        "no": '9632830563',
        "fb": "#",
        "linkedin": "https://www.linkedin.com/in/shreyash-sabare-91a960166",
        "img": "16.jpeg",
    },
];
document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems, options);
 });
$(document).ready(function() {
    team_html = '';
    for (var i = 0; i < team_list.length; i++) {
        team_html += `<div class="center tskf-team-card">
            <img class="responsive-img circle tskf-team-img" src="images/team/` + team_list[i].img + `">
            <h5 class="tskf-header-font tskf-thicken">` + team_list[i].name + `</h5>
            <h6 class="tskf-descp">` + team_list[i].descp + `</h6>
            <a target="_blank" href="` + team_list[i].fb + `"><img class="fb-team" src="images/fb-team.png" /></a>&nbsp;&nbsp;&nbsp;
            <a target="_blank" href="` + team_list[i].linkedin + `"><img class="linkedin-team" src="images/linkedin-team.png" /></a>
        </div>
        `;
    }
    $('.tskf-team-row').html(team_html);

    // materialize
    $('.sidenav').sidenav();
});
