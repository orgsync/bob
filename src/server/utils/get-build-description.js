const moment = require('moment');
const STATUS_INFO = require('../../shared/constants/status-info');

module.exports = ({
  build: {createdAt, error, id, ref, repo, status, updatedAt},
  withEmoji,
  withError
}) =>
  [].concat(
    withEmoji ? `:${STATUS_INFO[status].emojiShortname}:` : [],
    `Build #${id} ${repo} (${ref}) ${status}`,
    updatedAt > createdAt ?
    `[${moment.duration(Math.ceil((updatedAt - createdAt) / 1000) * 1000)
      .toISOString()
      .replace(/[PT]/g, '')
      .toLowerCase()}]` :
    [],
    withError && error ? `- ${error}` : []
  ).join(' ');
