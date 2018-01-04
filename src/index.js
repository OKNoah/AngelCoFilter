// import { autobind } from 'core-decorators'

let filter = undefined

const defaultProps = {
  filters: ['blockchain']
}

class AngelCoFilter {
  constructor (props = defaultProps) {
    this.props = props
  }

  run () {
    setInterval(() => {
      this.filter()
    }, 1000)
  }

  filter () {
    let jobs = []
    jobs = document.querySelectorAll('.job_listings.browse_startups_table_row')

    this.props.filters.map(filter => {
      [...jobs].map(job => {
        if (job.innerText.includes(filter)) {
          job.style.backgroundColor = 'red'

          const className = job.className.replace(' ', '.')

          safari.extension.setContentBlocker([
            {
                "trigger": {
                    "url-filter": "angel.co"
                },
                "action": {
                    "selector": className,
                    "type": "css-display-none"
                }
            }
          ])
        }
      })
    })
  }
}

function initialize (...mess) {
  console.log('mess', mess)
  // const props = {
  //   ...defaultProps,
  //   ...JSON.parse(mess[0].message)
  // }

  // filter = new AngelCoFilter(props)
  // filter.eventHandler()
}

window.onload = () => {
  filter = new AngelCoFilter(defaultProps)
  filter.run()
}

safari.self.addEventListener("message", initialize, false)
