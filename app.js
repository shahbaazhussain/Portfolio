$(document).ready(function () {
    const bars = document.querySelectorAll(".progress__bar");
    console.log(bars);

    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + "%";
        bar.style.width = percentage + "%";
        console.log(percentage);

    })

    $('.buttons').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter');
        console.log(filter);
        if (filter == 'all') {
            $('.image').show(400);
        } else {
            $('.image').not('.' + filter).hide(200);
            $('.image').filter('.' + filter).show(400);
        }
    });


    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


    $('.slides').slick({
        arrows: false,
        autoplay: true
    });









});

// const scriptURL = 'https://script.google.com/macros/s/AKfycbyv63Plxn5gymDeGhL7svjn80KJB0-R9Vhe3-0t65zLZpNXVk-mIi4caDonzAKJ_6E/exec'
// const form = document.forms['google-sheet']
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => alert("Thanks for Contacting us..! We will Contact You Soon..."))
//         .catch(error => console.error('Error!', error.message))
// });

const scriptURL = 'https://script.google.com/macros/s/AKfycbznu96MGvt7IerSX4wvGFSEHRmp1f13ZsHnBojNQDq3sT5zLZCOKXQL3mAPRK9d6k1i/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })






// function sendemail() {
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "harshsingh55818@gmail.com",
//         Password: "D80B691613DD2ABBE9D193429E875B7A63A4",
//         To: 'harshsingh55818@gmaiol.com',
//         From: "harshsingh55818@gmaiol.com",
//         Subject: "subject",
//         Body: "user_message",
//     }).then(
//         message => alert(message)
//     );
// }