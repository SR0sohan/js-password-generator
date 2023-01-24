class password {
    constructor() {
        console.log("welcome to password generator")
        this.pass =""
    }
    generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let number = "1234567890"
        let specail = "!@#$%^&*()"
        if (len < 7) {
            console.log("your password should be atleast 8 charecters long")
        } else {
            let i = 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                this.pass += number[Math.floor(Math.random()*number.length)]
                this.pass += specail[Math.floor(Math.random()*specail.length)]
                i += 3
            }
            this.pass =this.pass.substring(0, len)       
            return this.pass
        }
    }
}

let p = new password()
console.log(p.generatePassword(8))