export const Statistics = ({ title = 'Upload stats', stats }) => {
    return (
    <section className="statistics">
  <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {
                    stats.map(item => (
                        <li className="item" key={item.id}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentagel}%</span>
                        </li>
                    )
                     )
                }      
  </ul>
</section>
)
 };