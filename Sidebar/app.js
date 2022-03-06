//will select the sidebar-toggle
//sidebar
//close-btn

const toggleBtn = document.querySelector('.sidebar-toggle'):
const toggleBtn = document.querySelector('.close-btn'):
const toggleBtn = document.querySelector('.sidebar'):

toggleBtn.addEventListener('click', function (){
    console.log(sidebar.classList); // should see only value and the only class sidebar has

    // long way
    // if (sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar"); //has side bar
    // }
    // else {
    //     sidebar.classList.add("show-sidebar");
    // }

    //short way
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener('click',function (){
    sidebar.classList.remove("show-sidebar");
})