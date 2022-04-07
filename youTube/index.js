let videotobePlayed = {}

const searchVideos = async () => {
   try {
      let inp = document.querySelector(`#name`).value
      // console.log(inp)
      let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&maxResults=20&key=AIzaSyC6ZfNTY3ByqYuvhsL7Ol9riY_fJyMHEZo`)

      let data = await res.json()

      let videos = data.items
      appendVideos(videos)
      // return videos
   }

   catch (e) {
      console.log(e)
   }
}
const appendVideos = (data) => {
    document.querySelector(`#youtube`).innerHTML = null
    data.forEach(({ snippet: { title }, snippet: {thumbnails : { high: {url}}}, id: { videoId } } = el) => {

       let div = document.createElement(`div`)

       let p = document.createElement(`p`)
       // p.innerText = el.snippet.title
       p.innerText = title
       let thumbnail = document.createElement(`img`)
       thumbnail.src = url
       thumbnail.style.width = "100%"
       thumbnail.addEventListener('click', () => {

          videotobePlayed = {
             videoref : videoId 
          }
          localStorage.setItem('videoref',JSON.stringify(videotobePlayed))
          window.location.href = 'index.html'
          // window.open('video.html', '_blank')
       })
       div.append(thumbnail, p)
       document.querySelector(`#youtube`).append(div)
    })
 }
  const xyz = async () => {
      try {

         let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=20&key=AIzaSyC6ZfNTY3ByqYuvhsL7Ol9riY_fJyMHEZo`)

         let data = await res.json()
         // console.log(data)
         let videos = data.items

         appendVideos(videos)
         // return videos
      }

      catch (e) {
         console.log(e)
      }
   }
   xyz()