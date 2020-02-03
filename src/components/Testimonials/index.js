import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial, id) => (
      <div>
        <table>
        <tr>
        <td>
        <article className='message' key={id}>
          <div className='message-body'>
            {testimonial.quote}
          </div>
        </article>
        </td>
        <td style={{verticalAlign:'middle'}}>
          <p className='has-text-centered'>
            <img alt='' src={testimonial.image} />
            <cite>
              <span dangerouslySetInnerHTML={{ __html: testimonial.author }} />
            </cite>
          </p>
        </td>
        </tr>
        </table>
      </div>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.string,
    })
  ),
}

export default Testimonials
