
import HeartIcon from '../Icons/SVG/HeartIcon'
import Tooltip from '../Tooltip/Tooltip'
type FavouriteButtonProps = {
  selected?: boolean
  className?: string
  OnClick?: () => void
}
const FavouriteButton = (props: FavouriteButtonProps) => {
  const { selected, OnClick, className } = props
  return (
    <button onClick={OnClick} className={className}>
      {selected ? (
        <Tooltip title={'Saved'}>
          <HeartIcon
            path={
              'M10 19.1752L8.55 17.8552C3.4 13.1852 0 10.0952 0 6.3252C0 3.2352 2.42 0.825195 5.5 0.825195C7.24 0.825195 8.91 1.6352 10 2.9052C11.09 1.6352 12.76 0.825195 14.5 0.825195C17.58 0.825195 20 3.2352 20 6.3252C20 10.0952 16.6 13.1852 11.45 17.8552L10 19.1752Z'
            }
            width={20}
            height={20}
            fill={'#F44236'}
            viewBox={'0 0 20 20'}
          />
        </Tooltip>
      ) : (
        <Tooltip title={'Save'}>
          <HeartIcon width={20} height={20} fill={'#455A64'} viewBox={'0 0 20 20'} />
        </Tooltip>

      )}
    </button>
  )
}

<div className="36"></div>
export default FavouriteButton
