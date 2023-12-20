class User {
    constructor(user_id, user_pseudo, user_mail, user_password){
        this.user_id = user_id,
        this.user_pseudo = user_pseudo,
        this.user_password =user_password,
        this.user_mail = user_mail
    }
    get userId() {
        return this._user_id;
    }

    // Setter for user_id
    set userId(value) {
        this._user_id = value;
    }

    // Getter for user_pseudo
    get userPseudo() {
        return this._user_pseudo;
    }

    // Setter for user_pseudo
    set userPseudo(value) {
        this._user_pseudo = value;
    }

    // Getter for user_mail
    get userMail() {
        return this._user_mail;
    }

    // Setter for user_mail
    set userMail(value) {
        this._user_mail = value;
    }

    // Getter for user_password
    get userPassword() {
        return this._user_password;
    }

    // Setter for user_password
    set userPassword(value) {
        this._user_password = value;
    }
}