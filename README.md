# QAirline admin website

Đây là trang web dành cho khách hàng của hãng hàng không QAirline, là nơi khách hàng có thể tìm kiếm, đặt vé các chuyến bay, sửa xóa thông tin cũng như xem các bài viết và tin tức của hãng hàng không.

## Mục lục

1. [Tính năng](#tính-năng)
2. [Công nghệ](#công-nghệ)
3. [Cài đặt](#cài-đặt)
4. [Sử dụng](#sử-dụng)
5. [Cấu trúc dự án](#cấu-trúc-dự-án)

## Tính năng:

- Đặt vé máy bay:
  - Tìm các chuyến bay theo điểm đi, điểm đến, thời gian khởi hành
  - Chọn hạng ghế của vé (phổ thông & thương gia)
  - Nhập thông tin khách hàng cho vé máy bay
- Quản lý vé:
  - Xem các vé đã đặt
  - Sửa thông tin khách hàng cho từng vé máy bay (trong thời gian được sửa)
  - Hủy vé máy bay (trong thời gian được hủy)
- Xem thông tin của hãng (tin tức, thông tin hữu ích, khuyến mãi)
- Chỉnh sửa hồ sơ (thông tin cá nhân) để tự động điền khi đặt vé

## Công nghệ

Dự án sử dụng những công nghệ / framework / thư viện sau:

- ReactJS
- Material UI
- Tailwind CSS
- Framer Motion (cho một số animation)
- React Calendar (để chọn ngày)
- React Router DOM (điều hướng và định tuyến URL)
- Axios (gọi API từ backend, quản lí phiên, điều khiển truy cập)

## Cài đặt

Sau khi đã tải và giải nén project này, thầy hãy chạy lệnh sau đây để cài đặt các thư viện của dự án

```bash
npm install
```

## Sử dụng

Gõ lệnh sau trong terminal ở directory của dự án để chạy:

```bash
npm run dev
```

Sau đó truy cập vào trình duyệt tại địa chỉ:

```
http://localhost:5173/
```

## Cấu trúc dự án

```plaintext
src/
├── apis/                # Các API giao tiếp với server.
├── assets/              # Các ảnh
├── components/          # Các component dùng chung.
├── pages/               # Các trang chính của ứng dụng.
├── redux/               # Quản lý state.
├── utils/               # Các tiện ích và hàm xử lý.
└── main.jsx             # Điểm khởi đầu của ứng dụng.
```
