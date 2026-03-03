import '../stylesheets/counter.css'

export default function Counter({ count }) {
    return (
        <div>
            <div className="counter">
                <h1>{count}</h1>
            </div>
        </div>
    )
}
