export default function loadMore(res, quality){
const messages = []

  if(res.length > quality){
    for (let i = 0; i < quality; i++){
      //main - false to main - true
      res[i].main = true
      messages.push(res[i])
    }
      return messages
    } else {
      for(let i = 0; i < res.length; i++){
        res[i].main = true
        messages.push(res[i])
      }
  }
      return messages
}
