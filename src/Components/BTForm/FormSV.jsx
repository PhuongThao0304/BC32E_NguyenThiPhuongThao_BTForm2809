import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSV, updateSV } from '../../Store/actions/actions'

class FormSV extends Component {

    // tạo state nội bộ để lấy value từ input về
    stateDefault ={
        maSV: '',
        hoTen: '',
        soDT: '',
        email: ''
    }

    state = {
        sinhVien:this.stateDefault,
        errorMess: {

        }

    }

    handleState = (event) => {
        console.log(event)
        const { name, value } = event.target

        this.setState({
            sinhVien: {
                ...this.state.sinhVien,
                [name]: value
            }
        })
    }

    //validation 
    handleValidation = (event) => {
        console.log(event)
        const { title, name, tooShort, minLength, maxLength } = event.target
        const { valueMissing, patternMismatch } = event.target.validity

        let errMess = ''

        if (valueMissing) {
            errMess = `${title} không được bỏ trống`
        }
        if (tooShort) {
            errMess = `${title} phải từ ${minLength} tới ${maxLength}`
        }
        if (patternMismatch) {
            errMess = `${title} không đúng định dạng`
        }

        this.setState({

            errorMess: {
                ...this.state.errorMess,
                [name]: errMess
            }
        })

    }
    //handle Submit form 

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event)
        //validate form đã submit đủ chưa
        if (!event.target.checkValidity()) {
            return
        }
        if (!this.props.selectedSV) {
            this.props.dispatch(addSV(this.state.sinhVien))
            
        }
        else {
            this.props.dispatch(updateSV(this.state.sinhVien))
            
        }
    
        this.setState({
         
            sinhVien: this.stateDefault
            
        })
    }

static getDerivedStateFromProps = (nextProps, currentState) => {
    console.log(nextProps,currentState)

    if (nextProps.selectedSV && nextProps.selectedSV.maSV !== currentState.sinhVien.maSV) {
 
        currentState.sinhVien = nextProps.selectedSV
    }

    return currentState

}




    render() {
        console.log(this.props.selectedSV)
        console.log(this.state.sinhVien)
        console.log(this.stateDefault)
        const { maSV,hoTen,soDT,email } = this.state.sinhVien
        return (
            <form noValidate onSubmit={this.handleSubmit}>
                <h1 className='text-center bg-dark text-light'>Thông Tin Sinh Viên</h1>
                {/* các thẻ input */}
                <div className='row'>
                    <div className='col-6 text-left '>
                        <p className='mt-2'>Mã Sinh Viên</p>
                        <input disabled={`${this.props.selectedSV ? 'disabled' : ''}`} value={maSV} required title='Mã sinh viên' name='maSV' className='form-control' type="text" onChange={this.handleState} onBlur={this.handleValidation} minLength={2} maxLength={6} />
                        <span style={{ color: 'red' }}>{this.state.errorMess.maSV}</span>
                    </div>
                    <div className='col-6 text-left'>
                        <p className='mt-2'>Họ Tên</p>
                        <input value={hoTen} required title='Họ tên' name='hoTen' className=' form-control' type="text" onChange={this.handleState} onBlur={this.handleValidation} />
                        <span style={{ color: 'red' }}>{this.state.errorMess.hoTen}</span>
                    </div>
                    <div className='col-6 text-left'>
                        <p className=' mt-2'>Số Điện Thoại</p>
                        <input value={soDT} required title='Số điện thoại' name='soDT' className='form-control' onChange={this.handleState} onBlur={this.handleValidation} />
                        <span style={{ color: 'red' }}>{this.state.errorMess.soDT}</span>
                    </div>
                    <div className='col-6 text-left'>
                        <p className='mt-2'>Email</p>
                        <input value={email}  required pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' title='Email' name='email' className='form-control' type="text" onChange={this.handleState} onBlur={this.handleValidation} />
                        <span style={{ color: 'red' }}>{this.state.errorMess.email}</span>
                    </div>
                </div>
                <div className='text-left my-4 '>
                    <button type='submit' className={`btn btn-success mr-5 font-weight-bold ${this.props.selectedSV ? 'd-none' : ''}`}> Thêm Sinh Viên</button>
                    <button type='submit' className={`btn btn-warning font-weight-bold ${this.props.selectedSV ? '' : 'd-none'}`}> Cập nhật</button>
                </div>



            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ...state.BTform
    }

}

export default connect(mapStateToProps)(FormSV)
