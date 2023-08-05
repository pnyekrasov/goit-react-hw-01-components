export const Statistics = ({ title = 'Upload stats', stats }) => {
    return (
    <section>
  <h2>{title}</h2>

            <ul>
                {
                    stats.map(item => (
                        <li key={item.id}>
      <span>{item.label}</span>
      <span>{item.percentagel}%</span>
                        </li>
                    )
                     )
                }      
  </ul>
</section>
)
 };