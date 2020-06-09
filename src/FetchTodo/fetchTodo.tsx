import React from 'react'
import { DispatchProp } from 'react-redux'
import { fetchData } from '../store/action/sagaActions';
import { connect } from 'react-redux'
import { SagaState } from '../store/reducers/sagaReducer'


type Props = DispatchProp & ReturnType<typeof mapStateToProps>

const FetchTodo: React.FC<Props> = ({ dispatch, state }) => {
    const onFetch = () => {
        return dispatch(fetchData())
    }
    return (
        <>
            <div className='card'>
                <button onClick={() => onFetch()}> Asycn Todo </button>
                <div className='card-body'>
                    <h5 className='card-title'>{state.map((m, index) => <p key={index}>{m.title} </p>)}</h5>
                </div>
            </div>
        </>
    )


    // return(
    //     <div className='card'>
    //        <div className='card-body'>
    //         <h5 className='card-title'>{state.data}</h5>
    //        </div>
    //     </div>
    // )
    // // return posts.map(post => <Post post={post} key={post.id} />
}

const mapStateToProps = (state: { sagaReducer: SagaState }) => ({
    state: state.sagaReducer.data
})

  


export default connect(mapStateToProps)(FetchTodo)

