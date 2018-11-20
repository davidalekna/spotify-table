import React from 'react';
import { IconWrapper } from './styles';
//
import { ReactComponent as AddIcon } from 'src/assets/icons/add.svg';
import { ReactComponent as ArrowDownIcon } from 'src/assets/icons/arrow_down.svg';
import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow_right.svg';
import { ReactComponent as ArrowUpIcon } from 'src/assets/icons/arrow_up.svg';
import { ReactComponent as MoreHorizIcon } from 'src/assets/icons/more_horiz.svg';
import { ReactComponent as MoreVertIcon } from 'src/assets/icons/more_vert.svg';
import { ReactComponent as PauseCircleIcon } from 'src/assets/icons/pause_circle.svg';
import { ReactComponent as PlayCircleIcon } from 'src/assets/icons/play_circle.svg';
import { ReactComponent as PlaylistPlayIcon } from 'src/assets/icons/playlist_play.svg';
import { ReactComponent as SkipNextIcon } from 'src/assets/icons/skip_next.svg';
import { ReactComponent as SkipPrevIcon } from 'src/assets/icons/skip_prev.svg';
import { ReactComponent as ThumbDownIcon } from 'src/assets/icons/thumb_down.svg';
import { ReactComponent as ThumbUpIcon } from 'src/assets/icons/thumb_up.svg';
import { ReactComponent as VolumeDownIcon } from 'src/assets/icons/volume_down.svg';
import { ReactComponent as VolumeMuteIcon } from 'src/assets/icons/volume_mute.svg';
import { ReactComponent as VolumeOffIcon } from 'src/assets/icons/volume_off.svg';
import { ReactComponent as VolumeUpIcon } from 'src/assets/icons/volume_up.svg';

const AVAILABLE_ICONS = {
  add: AddIcon,
  arrow_down: ArrowDownIcon,
  arrow_left: ArrowLeftIcon,
  arrow_right: ArrowRightIcon,
  arrow_up: ArrowUpIcon,
  more_horiz: MoreHorizIcon,
  more_vert: MoreVertIcon,
  pause_circle: PauseCircleIcon,
  play_circle: PlayCircleIcon,
  playlist_play: PlaylistPlayIcon,
  skip_next: SkipNextIcon,
  skip_prev: SkipPrevIcon,
  thumb_down: ThumbDownIcon,
  thumb_up: ThumbUpIcon,
  volume_down: VolumeDownIcon,
  volume_mute: VolumeMuteIcon,
  volume_off: VolumeOffIcon,
  volume_up: VolumeUpIcon,
};

const Icon = ({ glyph, fill }) => {
  const SelectedIcon = AVAILABLE_ICONS[glyph];
  return (
    <IconWrapper fill={fill}>
      <SelectedIcon />
      {/* <img src={AVAILABLE_ICONS[glyph]} alt="" /> */}
    </IconWrapper>
  );
};

export default Icon;
