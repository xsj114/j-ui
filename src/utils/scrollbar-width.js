export default () => {

    let scrollBarWidth

    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.width = '100px'
    outer.style.position = 'absolute'
    outer.style.top = '-9999px'
    document.body.appendChild(outer)

    let widthNoScroll = outer.offsetWidth
    outer.style.overflow = 'scroll'

    let inner = document.createElement('div')
    inner.style.width = '100%'
    outer.appendChild(inner)

    let widthWithScroll = inner.offsetWidth
    outer.parentNode.removeChild(outer)

    scrollBarWidth = widthNoScroll - widthWithScroll

    return scrollBarWidth

}
