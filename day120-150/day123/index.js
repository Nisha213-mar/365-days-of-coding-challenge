console.log("This is about CV Screener");
//Data is an array of abjects which contains information about the candidates
const data = [
    {
        Name: 'Nisha Jha',
        age: 20,
        city: 'Dhanbad',
        Language: 'Python',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/women/51.jpg'
    },

    {
        Name: 'Priya Jha',
        age: 19,
        city: 'Dhanbad',
        Language: 'Python',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/women/52.jpg'
    },

    {
        Name: 'Nidhi Kumari',
        age: 20,
        city: 'Kulti',
        Language: 'C++',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/women/53.jpg'
    },

    {
        Name: 'Swati Ranjan ',
        age: 20,
        city: 'Ranchi',
        Language: 'C',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/women/54.jpg'
    },

    {
        Name: 'Amit Kumar Singh ',
        age: 20,
        city: 'Darbhanga',
        Language: 'Python',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        Name: 'Rohit Sharma',
        age: 24,
        city: 'Mumbai',
        Language: 'Python',
        framework: 'Django',
        Image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
]

//cv Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
//Button listener for next button
const candidates = cvIterator(data);
//Button listener for next button 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value;

    let Image = document.getElementById('image');
    let profiles = document.getElementById('profile');
    if (currentCandidate != undefined){ 
    Image.innerHTML = `<img src= '${currentCandidate.Image}'>`;
    profiles.innerHTML = `<ul class="list-group">
    <li class="list-group-item disabled" aria-disabled="true">Name: ${currentCandidate.Name}</li>
    <li class="list-group-item disabled" aria-disabled="true">Age: ${currentCandidate.age} years old </li>
    <li class="list-group-item disabled" aria-disabled="true">city:${currentCandidate.city}</li>
    <li class="list-group-item disabled" aria-disabled="true">Works on :${currentCandidate.Language}</li>
    <li class="list-group-item disabled" aria-disabled="true">Using: ${currentCandidate.framework} framework</li>
    <li class="list-group-item disabled" aria-disabled="true">${currentCandidate.Image}</li>
    
  </ul>`;
    }
    else{
        alert('End of candidate application');
        window.location.reload();
    }
}