import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteSV, editSV,searchSV } from '../../Store/actions/actions'


class TableSV extends Component {
    state = {
        searchedmaSV: '',
        mangSV: []

    }

    handleInput = (event) => {
        const { value } = event.target

        this.setState({
            searchedmaSV: value
        })

    }

    // static getDerivedStateFromProps = (nextProps, currentState) => {

    //     currentState.mangSV = nextProps.mangSV
    //     console.log(currentState, nextProps)
    //     return currentState
    // }


    render() {
        console.log(this.props)
        console.log(this.state)
        const { mangSV, searchedSV, unfoundMess } = this.props
        return (
            <div>
                {/* filtering */}
                <div>
                    <p style={{ color: 'green', fontWeight: 'bold' }}  >Tìm kiếm theo mã sinh viên </p>
                    <div className='text-left'>
                        <input style={{ width: '80%', padding: '5px', marginBottom: '20px' }} type="text" placeholder='Nhập vào mã sinh viên muốn tìm' onChange={this.handleInput} />
                        <button className='btn btn-primary ml-0' onClick={() => {
                            this.props.dispatch(searchSV(this.state.searchedmaSV))
                        }}> Tìm </button>
                    </div>
                    {/* table */}
                </div>
                <table className='table'>
                   
                    <thead className='thead-dark'>
                        <tr className='w-100'>
                            <th scope='col' className='text-left'>Mã SV</th>
                            <th scope='col' className='text-left'>Họ Tên</th>
                            <th scope='col' className='text-left'>Số điện thoại</th>
                            <th scope='col' className='text-left'> Email</th>
                            <th></th>
                            <th></th>

                        </tr>

                    </thead>
                    
                    <tbody>

                        {/* {
                            mangSV.map((SV) => {
                                return (
                                    <tr style={{display: `${(this.state.searchedmaSV !=='')? 'none' : ''}`}} className='text-left' key={SV.maSV}>
                                        
                                    <td>{SV.maSV}</td>
                                    <td>{SV.hoTen}</td>
                                    <td>{SV.soDT}</td>
                                    <td>{SV.email}</td>
                                    <td> <button className='btn btn-danger mr-4' onClick={() => {
                                        this.props.dispatch(deleteSV(SV.maSV))
                                    }}>DELETE</button>
                                        <button className='btn btn-warning' onClick={() => {
                                            this.props.dispatch(editSV(SV.maSV))
                                        }}>EDIT</button> </td>
                                </tr>
                                   
                                )
                            })
                        } */}
                       


                        {(!searchedSV || this.state.searchedmaSV ==='')?
                             (<>
                             {
                            mangSV.map((SV) => {
                                return (
                                    <tr style={{display: `${(this.state.searchedmaSV !=='')? 'none' : ''}`}} className='text-left' key={SV.maSV}>
                                        
                                    <td>{SV.maSV}</td>
                                    <td>{SV.hoTen}</td>
                                    <td>{SV.soDT}</td>
                                    <td>{SV.email}</td>
                                    <td> <button className='btn btn-danger mr-4' onClick={() => {
                                        this.props.dispatch(deleteSV(SV.maSV))
                                    }}>DELETE</button>
                                        <button className='btn btn-warning' onClick={() => {
                                            this.props.dispatch(editSV(SV.maSV))
                                        }}>EDIT</button> </td>
                                </tr>
                                   
                                )
                            })
                        }
                             </>
                            ): <>
                            <tr className='text-left' key={searchedSV.maSV}>
                                    <td>{searchedSV.maSV}</td>
                                    <td>{searchedSV.hoTen}</td>
                                    <td>{searchedSV.soDT}</td>
                                    <td>{searchedSV.email}</td>
                                    <td> <button className='btn btn-danger mr-4' onClick={() => {
                                        this.props.dispatch(deleteSV(searchedSV.maSV))
                                    }}>DELETE</button>
                                        <button className='btn btn-warning' onClick={() => {
                                            this.props.dispatch(editSV(searchedSV.maSV))
                                        }}>EDIT</button> </td>
                                </tr>
                            
                            </>}
                        




                    </tbody>
                </table>
                <>
                    <div style={{ marginTop: '20px', marginBlockEnd: '20px' }}>
                    <span className='align-center' style={{ color: 'red' }} > {unfoundMess} </span>
    
                </div>
                </>




            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { ...state.BTform }

}

export default connect(mapStateToProps)(TableSV)