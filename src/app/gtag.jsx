import React from 'react'

const gtag = () => {
  return (
    <>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VZQRFRCY3D"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VZQRFRCY3D');
</script>
    </>
  )
}

export default gtag