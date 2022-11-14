export class Article {
    private votes : number
    private title : string
    private link : string
    
    constructor(title : string, link : string, votes? : number) {
    this.votes = votes || 0
    this.title = title
    this.link = link
  }

   get Votes() {
    return this.votes
  }

   get Title() {
    return this.title
  }

   get Link() {
    return this.link
   }

    voteUp() : boolean {
    this.votes += 1
    return false
  }

    voteDown() : boolean {
    this.votes -= 1
    return false
  }

  domain() : string {
    try {
        if(this.link.match('//')==null) {
          return this.link.split('/')[0]
        }
        const domainandpath : string = this.link.split('//')[1]
        return domainandpath.split('/')[0]
    }
    catch(err) {
        return ''
    }
  }
}