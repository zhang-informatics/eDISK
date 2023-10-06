
var personal_web_dict = {
    "rui": "http://Ruizhang.umn.edu",
    "julian": "https://directory.sph.umn.edu/bio/sph-a-z/julian-wolfson",
    "steven": "https://healthinformatics.umn.edu/staff/steven-johnson",
    "kelvin": "https://healthinformatics.umn.edu/staff/kelvin-lim",
    "serguei": "https://healthinformatics.umn.edu/staff/serguei-pakhomov",
    "jeffery": "https://www.pharmacy.umn.edu/our-faculty-staff/our-faculty/jeffrey-bishop",
    "jeremy": "https://ruizhang.umn.edu/jeremy-yeung",
    "hongfang": "https://sbmi.uth.edu/faculty-and-staff/hongfang-liu.htm",
    "liwei": "https://sbmi.uth.edu/faculty-and-staff/liwei-wang.htm"
};
function openWeb(element){
    var divId = element.id
    var url = personal_web_dict[divId];
    window.open(url, '_blank');
}