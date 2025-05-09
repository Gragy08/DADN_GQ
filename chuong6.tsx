// Chuong 6

console.log(`Do các bộ truyền bánh răng trong hộp giảm tốc đều có v < 12m/s nên ta chọn phương pháp bôi trơn ngâm dầu. Ta chọn được loại dầu bôi trơn là AK-15 có độ nhớt là 20 Centistoc.
    `)
    
    console.log(`Với bộ truyền ngoài hộp do không có thiết bị che đậy, hay bị bụi bặm bám vào, ta chọn  bôi trơn định kỳ bằng mỡ.
    `)
    
    console.log(`Thống kê các loại dầu dành cho bôi trơn`)
    
    interface LubricantInfo {
      name: string;
      application: string;
      quantity: string;
      replacementTime: string;
    }
    
    const lubricationTable: LubricantInfo[] = [
      {
        name: "Dầu ô tô máy kéo AK-15",
        application: "Bộ truyền trong hộp",
        quantity: "0,6 lít/Kw",
        replacementTime: "5 tháng",
      },
      {
        name: "Mỡ T",
        application: "Tất cả các ổ và bộ truyền ngoài",
        quantity: "2/3 chỗ rỗng bộ phận ổ",
        replacementTime: "1 năm",
      },
    ];
    
    lubricationTable.forEach((item, index) => {
      console.log(`\n#${index + 1}`);
      console.log(`Tên dầu hoặc mỡ: ${item.name}`);
      console.log(`Thiết bị cần bôi trơn: ${item.application}`);
      console.log(`Lượng dầu hoặc mỡ: ${item.quantity}`);
      console.log(`Thời gian thay dầu hoặc mỡ: ${item.replacementTime}`);
    });
    
    // Het Chuong 6