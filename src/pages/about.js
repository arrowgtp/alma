import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

import PageWrapper from '../components/PageWrapper'
import CenteredContainer from '../components/styled/CenteredContainer'
import H1 from '../components/styled/H1'

const About = ({ intl }) => {
  return (
    <PageWrapper>
      <CenteredContainer>
        <H1>About Alma</H1>
        <p>
          We're the only site running on your computer dedicated to showing the best
          photos and videos of pandas eating lots of food.
        </p>
        <p>{intl.formatMessage({ id: "title" })}</p>
        <p>{intl.formatMessage({ id: "slogan" })}</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque. Eget nunc scelerisque viverra mauris. Dolor sit amet consectetur adipiscing. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Elit at imperdiet dui accumsan sit amet nulla facilisi. Mi bibendum neque egestas congue. Habitasse platea dictumst quisque sagittis purus sit. Dolor sed viverra ipsum nunc. Massa ultricies mi quis hendrerit dolor magna. Lacus suspendisse faucibus interdum posuere lorem.</p>

        <p>Enim neque volutpat ac tincidunt. Tristique et egestas quis ipsum suspendisse. Purus gravida quis blandit turpis. A pellentesque sit amet porttitor eget. Proin sed libero enim sed faucibus. Ipsum faucibus vitae aliquet nec. Odio tempor orci dapibus ultrices in iaculis. Ut venenatis tellus in metus vulputate eu scelerisque. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Mauris in aliquam sem fringilla ut. Eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at ultrices. Velit egestas dui id ornare. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Lobortis mattis aliquam faucibus purus in massa tempor. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Et malesuada fames ac turpis egestas sed tempus urna.</p>

        <p>Pretium viverra suspendisse potenti nullam ac tortor vitae. Montes nascetur ridiculus mus mauris vitae ultricies. In nibh mauris cursus mattis molestie a iaculis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Porttitor leo a diam sollicitudin tempor. Et netus et malesuada fames. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Leo a diam sollicitudin tempor id eu. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Mauris augue neque gravida in fermentum et sollicitudin. Id cursus metus aliquam eleifend mi in nulla. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.</p>

        <p>Ullamcorper malesuada proin libero nunc consequat interdum. Et netus et malesuada fames ac turpis egestas maecenas. Volutpat lacus laoreet non curabitur gravida arcu. Posuere urna nec tincidunt praesent semper feugiat. Pellentesque elit ullamcorper dignissim cras. Ut consequat semper viverra nam libero justo. Cursus risus at ultrices mi tempus imperdiet. Ut enim blandit volutpat maecenas volutpat blandit. Nisl nisi scelerisque eu ultrices vitae. Curabitur vitae nunc sed velit. Sed vulputate odio ut enim blandit volutpat maecenas. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Ultrices eros in cursus turpis massa tincidunt. Et malesuada fames ac turpis egestas. Arcu dictum varius duis at consectetur lorem donec massa sapien. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Semper risus in hendrerit gravida rutrum quisque non.</p>

        <p>Faucibus purus in massa tempor nec feugiat. Enim nec dui nunc mattis enim ut. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Amet cursus sit amet dictum sit amet justo donec. Nisl vel pretium lectus quam id leo in. Volutpat sed cras ornare arcu dui vivamus arcu. Enim neque volutpat ac tincidunt vitae semper quis. Nisi porta lorem mollis aliquam ut porttitor. Id aliquet risus feugiat in ante. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Vitae congue eu consequat ac felis donec et. Viverra nibh cras pulvinar mattis nunc sed blandit. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.</p>
        
      </CenteredContainer>
    </PageWrapper>
  )
}

export default injectIntl(About)

// export default About