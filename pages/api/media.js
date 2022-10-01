// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

// function uploadVideoStream(req: NextApiRequest, res: NextApiResponse) {
//   const bb = busboy({ headers: req.headers });

//   bb.on('file', (_, file, info) => {
//     // auth-api.mp4
//     const fileName = info.filename;
//     const filePath = `./videos/${fileName}`;

//     const stream = fs.createWriteStream(filePath);

//     file.pipe(stream);
//   });

//   bb.on('close', () => {
//     res.writeHead(200, { Connection: 'close' });
//     res.end(`That's the end`);
//   });

//   req.pipe(bb);
//   return;
// }

const CHUNK_SIZE_IN_BYTES = 1000000; // 1 mb

function getVideoStream(req, res) {
  const range = req.headers.range;

  if (!range) {
    return res.status(400).send('range must be provided');
  }

  const videoUrl = req.query.url;

  const videoSizeInBytes = fs.statSync(videoUrl).size;

  const chunkStart = Number(range.replace(/\D/g, ''));

  const chunkEnd = Math.min(
    chunkStart + CHUNK_SIZE_IN_BYTES,
    videoSizeInBytes - 1
  );

  const contentLength = chunkEnd - chunkStart + 1;

  const headers = {
    'Content-Range': `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };

  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoUrl, {
    start: chunkStart,
    end: chunkEnd,
  });

  videoStream.pipe(res);
}

export default function handler(req, res) {
  const method = req.method;

  if (method === 'GET') {
    return getVideoStream(req, res);
  }

  // if (method === 'POST') {
  //   return uploadVideoStream(req, res);
  // }

  return res.status(405).json({ error: `method ${method} is not allowed` });
}
