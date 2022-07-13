import classNames from "classnames/bind";
import styles from './Hello.module.scss'
import Banner from "../../layouts/components/Banner/Banner";
import Button from '../../components/Button'
import { hello } from '../../assets/images'
import Intro from "../../components/Intro/Intro";

const cx = classNames.bind(styles)

function Hello() {
  const title = "Xin chào"
  const intros = [
    "Hiện tại, GoValue đang thực hiện 1 sứ mệnh rất quan trọng cho cộng đồng đầu tư chứng khoán. Đó là:",
    "Hướng dẫn, chia sẻ với cộng đồng về những kiến thức, kinh nghiệm (chi tiết nhất) để mọi người có thể tự tin đầu tư chứng khoán.",
    "Trên website của GoValue, bạn sẽ tìm thấy hơn 120 bài viết từ cơ bản đến nâng cao về đầu tư chứng khoán.",
    "Với hơn 15 năm đầu tư chứng khoán chuyên nghiệp, GoValue team hiểu rằng, mọi thứ sẽ vô cùng khó khăn nếu bạn là người mới (nhà đầu tư F0).",
    "Vì thế, hướng dẫn này sẽ giúp bạn làm quen với những kiến thức về đầu tư chứng khoán, giúp bạn từng bước bắt đầu cuộc hành trình kiếm tiền “đầy chông gai” nhưng sẽ rất thú vị phía trước."
  ]

  const category1 = {
    title: "Category 1",
    intros: [
      "Tiền mã hóa là một hình thái kỹ thuật số của tiền tệ. Bạn có thể sử dụng nó để thanh toán hầu bao cho bạn bè, mua một đôi tất mới mà bạn đã để ý từ lâu, hoặc đặt vé máy bay hay phòng khách sạn cho kỳ nghỉ tiếp theo của mình. Vì tiền mã hóa là một dạng tài sản kỹ thuật số, cho nên bạn có thể gửi nó đến người thân và gia đình ở khắp mọi nơi trên thế giới.",
      "Vậy nó cũng giống như PayPal hay chuyển khoản ngân hàng thôi mà, đúng không?",
      "Không hẳn là như vậy. Nó thú vị hơn rất nhiều!",
      "Bạn thấy đó, các cổng thanh toán trực tuyến truyền thống đều thuộc quyền sở hữu của những tổ chức lớn. Họ sẽ nắm giữ tiền thay cho bạn, và bạn sẽ phải yêu cầu họ chuyển tiền thay mặt cho mình mỗi khi muốn tiêu dùng.",
      "Với tiền mã hóa thì chẳng có tổ chức trung gian nào ở đấy cả. Bạn, bạn bè của bạn và hàng nghìn người khác có thể tự đóng vai làm ngân hàng của chính mình thông qua việc chạy những phần mềm miễn phí. Máy tính của bạn sẽ được kết nối thẳng đến máy tính của những người khác, đồng nghĩa với việc giao dịch sẽ được thực hiện trực tiếp - không cần phải qua trung gian!",
      "Để sử dụng tiền mã hóa, bạn không cần đăng ký địa chỉ email và mật khẩu trên một trang web nào cả. Bạn có thể tải xuống các ứng dụng hỗ trợ tiền mã hóa về smartphone và bắt đầu gửi nhận tiền chỉ sau ít phút."
    ],
    feature: {
      title: "Vì sao lại gọi là tiền mã hóa?",
      contents: [
        {
          content: "Cái tên tiền mã hóa là sự kết hợp giữa mã hóa trong mật mã học và tiền tệ. Với tiền mã hóa, các phương thức mã hóa phức tạp sẽ được sử dụng để bảo vệ quỹ tiền, đảm bảo không ai khác ngoài chủ sở hữu có thể sử dụng chúng.",
          subContents: []
        },
        {
          content: "Bạn không cần phải hiểu tất cả những điều này - những ứng dụng bạn sử dụng sẽ làm điều đó thay cho bạn. Bạn sẽ không cần phải nắm rõ cơ chế hoạt động của những thứ đằng sau.",
          subContents: []
        },
        {
          content: "Tuy nhiên, nếu bạn có hứng thú về chủ đề này thì chúng tôi luôn có sẵn nhiều bài viết dành cho bạn:",
          subContents: [
            "Khóa Công khai trong Mật mã học là gì?",
            "Lịch sử của Mật mã học",
            "Mã hóa Đối xứng và Bất đối xứng",
            "Chữ ký Điện tử là gì?"
          ]
        }
      ]
    },
    conclusion: "Do đó, loại tiền tệ internet này không do một cá nhân đơn lẻ nào sở hữu và sử dụng mật mã học để bảo vệ hệ thống. Nhưng chẳng phải chúng ta đã có sẵn các ứng dụng thanh toán rồi đúng không, vậy tại sao lại phải quan tâm đến tiền mã hóa nữa?"
  }

  const category2 = {
    title: "Category 2",
    intros: [
      'Đừng cảm thấy bị ngợp bởi những thuật ngữ mà người ta thường sử dụng để mô tả về "blockchai". Blockchain chỉ là một cơ sở dữ liệu. Bản chất của bạn cũng không quá phức tạp - bạn có thể tạo nó trên một bảng tính mà không phải mất quá nhiều công sức.',
      'Các cơ sở dữ liệu này có nhiều điểm đặc biệt. Đầu tiên là blockchain chỉ có thể tăng lên. Điều này có nghĩa là bạn chỉ có thể thêm thông tin - bạn không thể chọn một ô và xóa dữ liệu đã có sẵn ở đó, hoặc chỉnh sửa nó theo bất kỳ cách nào.',
      'Điểm thứ hai là mỗi bộ dữ liệu thêm vào (gọi là một block hay là "khối") cơ sở dữ liệu sẽ có liên kết mật mã học với khối trước. Nói một cách đơn giản, mỗi bộ dữ liệu phải có chung một dấu vân tay kỹ thuật số (hash) với khối trước.',
      'Và đơn giản chỉ vậy thôi! Vì các block được liên kết với nhau, tập hợp của chúng sẽ là một chuỗi các khối. Hay như người ta thường gọi là blockchain - chuỗi khối.',
      'Blockchain là bất biến: Nếu bạn thay đổi một khối, dấu vân tay đi với nó cũng sẽ thay đổi. Và vì dấu vân tay đó sẽ phải xuất hiện trong khối tiếp theo, khối tiếp theo cũng sẽ thay đổi. Và điều tương tự sẽ lặp lại với những khối sau đó trong chuỗi. Bạn sẽ tạo ra một hiệu ứng domino, mọi thay đổi đều được phản ánh rõ ràng. Bạn sẽ không thể thay đổi thông tin mà không khiến người khác phải chú ý.'
    ],
    feature: {
      title: "Kiến thức blockchain miễn phí!",
      contents: [
        {
          content: null,
          subContents: [
            "Cơ chế đồng thuận blockchain là gì?",
            "Proof of Work (PoW) là gì?",
            "Lý giải về Lặp chi",
            "Lý thuyết trò chơi và Tiền mã hóa",
            "Lý giải về Cơ chế kháng lỗi Byzantine"
          ]
        }
      ]
    },
    conclusion: "Bạn đã biết hết về những thứ ở trên và chỉ muốn học cách giao dịch với đầu tư? Hãy chuyển sang phần tiếp theo."
  }

  const category3 = {
    title: "Category 3",
    intros: [
      'Có thể bạn đã biết là tiền mã hóa và blockchain hiện đã được ứng dụng trong nhiều lĩnh vực khác nhau. Dễ thấy rằng một trong những công dụng lớn nhất của chúng lúc này là để đầu cơ.',
      'Giao dịch thường là cách tiếp cận nhanh nhất để kiếm tiền. Nhà đầu tư có thể dễ dàng mở và đóng các vị thế tiền mã hóa. Nhưng làm thế nào để biết thời điểm nên vào hay ra thị trường?',
      'Một trong những cách thông thường để hiểu thị trường tiền mã hóa là thông qua phân tích kỹ thuật (TA). Các nhà phân tích kỹ thuật sẽ nhìn vào biến động giá, đồ thị và các dạng dữ liệu khác để tìm tín hiệu kiếm tiền.',
      'Có lẽ bạn đang nóng lòng muốn bắt đầu giao dịch ngay. Trên lý thuyết thì bạn đã có thể làm như vậy. Nó vô cùng đơn giản! Tuy nhiên, giao dịch không phải là lĩnh vực dành cho những tay mơ! Chúng tôi sẽ phải mất rất nhiều thời gian để chuẩn bị cho bạn tất cả những gì cần biết để giao dịch.'
    ],
    feature: {
      title: "Hãy học bí quyết để thành thạo đồ thị giá!",
      contents: [
        {
          content: 'Chúng tôi đã chuẩn bị cho bạn những bài viết để bắt đầu:',
          subContents: [
            "Phân tích kỹ thuật (TA) là gì?",
            "Hướng dẫn về Đồ thị Nến giá dành cho Người mới bắt đầu"
          ]
        },
        {
          content: 'May thay, chúng tôi còn tạo sẵn một bộ hướng dẫn chuyên sâu dành cho những ai mới bắt đầu! Nó bao gồm gần như mọi thứ (thậm chí còn nhiều hơn) bạn cần biết để giao dịch tiền mã hóa:',
          subContents: [
            "Hướng dẫn hoàn chỉnh về Giao dịch Tiền mã hóa dành cho Người mới bắt đầu",
          ]
        },
        {
          content: 'Khi nào bạn có thể đọc thuộc làu làu bài viết này khi bị đánh thức vào lúc 5 giờ sáng, bạn mới được phép bước đến các chủ đề tiếp theo:',
          subContents: [
            "Hướng dẫn về Quản lý rủi ro dành cho Người mới bắt đầu",
            "Hướng dẫn về các Chiến lược Giao dịch Tiền mã hóa dành cho Người mới bắt đầu",
            '5 Chỉ báo quan trọng nhất trong Phân tích kỹ thuật',
            '12 Kiểu hình Nến giá thường dùng nhất trong Phân tích kỹ thuật',
            '7 Sai sót thường gặp phải trong Phân tích kỹ thuật (TA)'
          ]
        }
      ]
    },
    conclusion: null
  }

  return (
    <div className={cx('wrapper')}>
      <Banner title={title} intros={intros} imgSrc={hello} small />

      <nav className={cx('navbar')}>
        <h4 className={cx('nav-title')}>Truy cập nhanh</h4>
        <div className={cx('buttons')}>
          <Button outline>Category 1</Button>
          <Button outline>Category 2</Button>
          <Button outline>Category 3</Button>
          <Button outline>Category 4</Button>
          <Button outline>Category 5</Button>
        </div>
      </nav>

      <div className={cx('content')}>
        <Intro category={category1} />
        <Intro category={category2} grey />
        <Intro category={category3} />
      </div>
    </div>
  )
}

export default Hello;