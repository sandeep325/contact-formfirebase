function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassNameclassNameName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassNameclassNameName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classNameName = tablinks[i].classNameName.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classNameName += " active";
}
