class Promise{
    constructor(excutor){
        this.PENDING ='PENDING';
        this.RESOLVE ='RESOLEV';
        this.REJECT = 'REJECT';
        this.onResolveCd = [];
        this.onRejectCd = [];
        this.status = 'PENDING';
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value)=>{
            if (this.status === this.PENDING){
                this.status = this.RESOLVE;
                this.value = value;
                this.onResolveCd.forEach(fn=>fn())
            }
        }
        let reject=(reason)=>{
            if (this.status === this.PENDING){
                this.status = this.REJECT;
                this.reason = reason;
                this.onRejectCd.forEach(fn=>fn())
            }
        }
        try{
            excutor(resolve, reject)
        }catch(e){
            reject(e)
        }
    }
    then(onfufilled,onrejected){
        if (this.status === this.RESOLVE){
            onfufilled(this.value)
        }
        if (this.status === this.REJECT){
            onrejected(this.reason)
        }
        if (this.status === this.PENDING){
            this.onResolveCd.push(()=>{
                onfufilled(this.value)
            })
            this.onRejectCd.push(() => {
                onrejected(this.reason)
            })
        }
    }
}
module.exports = Promise