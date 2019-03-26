class Promise1{
    constructor(excutor){
        this.PESOLVE ='PESOLVE';
        this.PEJECT = 'PEJECT';
        this.PENDING = "PENDING"
        this.status ="PENDING";
        this.onResolveCd = [];
        this.onRejectCd = [];
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) =>{
            if (this.status === this.PENDING){
                this.status = this.PESOLVE;
                this.value = value;
                this.onResolveCd.forEach(fn=>fn())
            }
        }
        let reject = (reason) =>{
            if (this.status === this.PEJECT){
                this.status = this.PEJECT
                this.reason = reason
                this.onRejectCd.forEach(fn=>fn())
            }
        }
        excutor(resolve, reject)
    }
    then(onfufilled,onrejected){
        if (this.status===this.PESOLVE){
            onfufilled(this.value)
        }
        if(this.status === this.PEJECT){
            onrejected(this.reason)
        }
        if(this.status === this.PENDING){
            this.onResolveCd.push(()=>{
                onfufilled(this.value)
            })
            this.onRejectCd.push(() => {
                onrejected(this.reason)
            })
        }
    }
}
module.exports = Promise1