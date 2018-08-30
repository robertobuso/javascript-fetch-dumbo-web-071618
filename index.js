const app = "I don't do much.";


const token = '73f00d53867c70a978611df8a1cec495c8209632'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
