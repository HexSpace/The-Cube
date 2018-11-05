# Pixhawk2.1 （The Cube）飞控和载板技术参数手册（ZH）





Pixhawk2.1 （The Cube） 的目标是为学术机构，爱好者以及专业用户提供高性价比的自驾仪硬件！

在飞行软件的帮助下，Pixhawk2.1（The Cube） 可以完全驾驶任何一架遥控飞机，直升机或多旋翼等载具，成为专业的无人机平台。





## 关于 Pixhawk2.1 （The Cube）





### 这一代的设计目标

------

- 一个集成的 (all-in-one)，一体的飞控
- 为大多数应用提供充足的不需要扩展的数据接口
- 更加易用
- 更好的传感器表现
- 更好的微控制器资源
- 更高的可靠性，并减少集成复杂度
- 减少物料以及生产成本





### 设计特点

------

- 多合一设计理念，带有集成的 FMU (飞行管理单元) 和 I/O (输入输出模块) 和丰富的数据接口
- 更好的工业制造能力，便于安装的结构设计
- 为 FMU 和 I/O 提供分开的电源供应 (详见电源架构部分)
- 为 FMU 和 I/O SRAM (静态内存) / RTC (时钟芯片) 提供板载的备用电池
- 可集成标准电源模块







## 主要特性





### 处理性能

------

- 32bit  ARM® STM32F427 Cortex®-M4 Core (带浮点运算单元)
- 180 MHz / 252 MIPS
- 高达 256+4 KB 的 SRAM, 包含 64 KB CCM (Core Coupled Memory)
- 2 MB Flash
- 32 bit STM32F103 故障保护处理器



### 接口

------

- 5 个 UART (串行端口)，其中 1 个支持大功率运行，2 个带有硬件流控制
- 2 个 CAN 标准总线 (一个带内置 3.3 V 收发器，一个带扩展连接器)
- 支持 Spektrum DSM® 信号输入，Futaba S.Bus® 信号输入输出，PPM 信号输入
- 2 路 I2C 总线
- SPI
- 3.3 V 的 ADC 输入
- 内置 Micro USB 端口 + 外部 Micro USB 扩展



### 电力系统

------

- 支持自动故障转移控制的理想二极管
- 承载最大电压 10 V，最大电流 10 A+ 的高性能伺服系统
- 所有外设输出均设置电流过载保护功能，所有输入均受 ESD (静电释放) 保护
- 拥有电源模块，伺服导轨，USB 三组电源冗余供电







## 详细参数





### 处理器型号

------



| 处理器     | 型号                                                         |
| ---------- | ------------------------------------------------------------ |
| 主处理器   | STM32F427 (32 Bit ARM® Cortex®-M4, 180 MHz, 2 MB flash, 256 KB SRAM) |
| 协助处理器 | STM32F100 (32 Bit ARM® Cortex®-M3, 24 MHz, 8 KB SRAM)        |





### 传感器型号

------



| 传感器类型 | 型号              |
| ---------- | ----------------- |
| 加速度计   | LSM303D / MPU9250 |
| 陀螺仪     | L3GD20 / MPU9250  |
| 电子罗盘   | LSM303D / MPU9250 |
| 气压计     | MS5611            |





### 设备接口和协议

------



| 接口名称                          | 接口能力                                                     | 接口标识和位置    |
| --------------------------------- | ------------------------------------------------------------ | ----------------- |
| SERIAL 1 / UART 1                 | UART 1 带硬件流控制，可承载 3.3 V 最高兼容 5 V 的 CMOS 逻辑电平，拥有 ESD (静电释放) 保护 | `TELEM1`          |
| SERIAL 2 / UART 2                 | UART 2 带硬件流控制，可承载 3.3 V 最高兼容 5 V 的 CMOS 逻辑电平，拥有 ESD (静电释放) 保护 | `TELEM2`          |
| SERIAL 3 / UART 3 / I2C 1         | 可承载 3.3 V 最高兼容 5 V 的 CMOS 逻辑电平，拥有 ESD (静电释放) 保护 | `GPS1`            |
| SERIAL 4 / UART 4 / I2C 2         | UART 4 / I2C 2，可承载 3.3 V 最高兼容 5 V 的 CMOS 逻辑电平，拥有 ESD (静电释放) 保护 | `GPS2`            |
| SERIAL 5 / UART 5 (Debug Console) | UART 5，Debug Console                                        | `CONS`            |
| I2C 2                             | I2C 2 独立接口，驱动器安装在 FMU 板上，不带电压缓冲，最高可承载 3.3 V COMS 逻辑电平 | `I2C2`            |
| CAN Bus                           | 标准 CAN 总线，驱动安装在 FMU 上                             | `CAN1` `CAN2`     |
| R/C IN                            | 支持 CPPM / Futaba S.Bus 信号输入                            | `RCIN`            |
| DSM / USART                       | 支持 Spektrum DSM® Technology，可使用 Spektrum DSM2™ / DSMX™ 卫星接收机连接；I/O USART 1 RX | `SKPT`            |
| S.Bus OUT / RSSI IN               | S.Bus 伺服输入输出，PPM 信号输入，RSSI 输入                  | `SBUSo`           |
| POWER                             | 主要电源和备用电源输入                                       | `POWER1` `POWER2` |
| MAIN OUT                          | 标准 PWM 伺服信号输出接口 x8                                 | `MAIN OUT`        |
| AUX OUT                           | 可编程 FMU GPIO x6，支持 PWM 信号输出                        | `AUX OUT`         |
| USB                               | HMI：LED，扬声器和 USB 扩展                                  | `USB`             |
| ADC                               | 3.3 V  ADC 输入                                              | `ADC`             |
| USB                               | USB 2.0 (Micro - B 5 Pin)                                    | The Cube          |
| SD Card / SDIO                    | 使用 microSD Card 存储日志；支持 SDIO                        | The Cube          |
| SPI                               | 内置的SPI接口，不带缓冲，仅可使用较短的电缆连接，不建议使用  | 内置触点          |
| 调试接口                          | I/O 和 FMU 调试接口                                          | 内置接口          |





### 工作条件和性能

------



| 项目                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| POWER 输入电压 / 额定输入电流   | 4.1 - 5.7 V / 2.5 A，0 - 20 V 的输入之间系统不受损害，但是无法工作 |
| POWER 额定输出 / 输入功率       | 14 W                                                         |
| USB 接口输入电压 / 额定输入电流 | 4 - 5.7 V / 250 mA                                           |
| 舵机口输入电压                  | 4 - 10.5 V                                                   |
| 防水性能                        | 无防水，需外部防水保护                                       |
| 工作环境温度                    | -10° / 55°                                                   |





### 尺寸和规格

------



| 类型                                            | 描述                               |
| ----------------------------------------------- | ---------------------------------- |
| The Cube 尺寸 / 外壳材质                        | 38.4x38.4x22 (mm) / CNC 铝合金成型 |
| The Cube Standard Carrier Board 尺寸 / 外壳材质 | 94.5x44.3x17.3 (mm) / 注塑 ABS     |





### 接口类型和定义

------



#### The Cube 接口型号

------



| Name                  | Model                     |
| --------------------- | ------------------------- |
| The Cube Connector    | DF17 80P                  |
| The Cube USB          | USB 2.0 (Micro - B 5 Pin) |
| The Cube SD Card Type | microSD Card              |





#### Standard Carrier Board 接口型号

------



| Connector | 对应连接器型号              |
| --------- | --------------------------- |
| `GPS1`    | JST-GH 1.25 mm (8-pin)      |
| `GPS2`    | JST-GH 1.25 mm (6-pin)      |
| `TELEM1`  | JST-GH 1.25 mm (6-pin)      |
| `TELEM2`  | JST-GH 1.25 mm (6-pin)      |
| `I2C2`    | JST-GH 1.25 mm (4-pin)      |
| `USB`     | JST-GH 1.25 mm (6-pin)      |
| `CAN1`    | JST-GH 1.25 mm (4-pin)      |
| `CAN2`    | JST-GH 1.25 mm (4-pin)      |
| `POWER1`  | Molex CLIK-Mate 2mm (6-pin) |
| `POWER2`  | Molex CLIK-Mate 2mm (6-pin) |
| `ADC`     | JST-GH 1.25 mm (3-pin)      |





#### The Cube 80-Pin DF17 Connector Assignments

------



| 引脚# | Name                      | 方向 | 描述                                         |
| ----- | ------------------------- | ---- | -------------------------------------------- |
| 1     | FMU_SWDIO                 | I/O  | FMU 串行数据收发                             |
| 2     | FMU_LED_AMBER             | O    | LED 错误指示灯 (仅驱动，使用 FET 来控制 LED) |
| 3     | FMU_SWCLK                 | O    | FMU 串行时钟信号                             |
| 4     | I2C_2_SDA                 | I/O  | I2C 串行数据收发                             |
| 5     | EXTERN_CS                 | O    | SPI 从设备使能信号引脚 (用于调试)            |
| 6     | I2C_2_SCL                 | O    | I2C 串行时钟信号                             |
| 7     | FMU_!RESET                | I    | FMU 重启引脚                                 |
| 8     | PROT_SPARE_1              |      | 空闲                                         |
| 9     | VDD_SERVO_IN              | I    | 为 I/O 接口在故障避险模式下提供电力保障      |
| 10    | PROT_SPARE_2              |      | 空闲                                         |
| 11    | EXTERN_DRDY               | I    | SPI 外部中断引脚 (NC, 用于调试)              |
| 12    | SERIAL_5_RX               | I    | UART 5 RX (Receive Data)                     |
| 13    | GND                       |      | 系统 GND                                     |
| 14    | SERIAL_5_TX               | O    | UART 5 TX (Transmit Data)                    |
| 15    | GND                       |      | 系统 GND                                     |
| 16    | SERIAL_4_RX               | I    | UART 4 RX (Receive Data)                     |
| 17    | SAFETY                    |      | 安全按钮输入                                 |
| 18    | SERIAL_4_TX               | O    | UART 4 TX (Transmit Data)                    |
| 19    | VDD_3V3_SPEKTRUM_EN       | O    | Spektrum 接收机独立电源                      |
| 20    | SERIAL_3_RX               | I    | UART 3 RX (Receive Data)                     |
| 21    | PRESSURE_SENS_IN          | AI   | 模拟信号接口，用于压电感应，声纳或激光测距   |
| 22    | SERIAL_3_TX               | O    | UART 3 TX (Transmit Data)                    |
| 23    | AUX_BATT_VOLTAGE_SENS     | AI   | 备用电源输入接口的电压感应                   |
| 24    | ALARM                     | O    | 蜂鸣器 PWM 信号                              |
| 25    | AUX_BATT_CURRENT_SENS     | AI   | 备用电源输入接口的电流感应                   |
| 26    | IO_VDD_3V3                | I    | I/O 芯片电能，为调试使用                     |
| 27    | VDD_5V_PERIPH_EN          | O    | 为外围设备提供的 5V 电压                     |
| 28    | IO_LED_SAFET_PROT         | O    | 为 IRIS 引出的 IO_LED_SAFETY (安全指示灯)    |
| 29    | VBUS                      | I    | USB V Bus 引脚                               |
| 30    | SERIAL_2_RTS              |      | UART 2 RTS (Request To Send)                 |
| 31    | OTG_DP1                   | I/O  | USB D+ 电平信号引脚                          |
| 32    | SERIAL_2_CTS              |      | UART 2 CTS (Clear To Send)                   |
| 33    | OTG_DM1                   | I/O  | USB D- 电平信号引脚                          |
| 34    | SERIAL_2_RX               | I    | UART 2 RX (Receive Data)                     |
| 35    | I2C_1_SDA                 | I/O  | I2C 串行数据收发                             |
| 36    | SERIAL_2_TX               | O    | UART 2 TX (Transmit Data)                    |
| 37    | I2C_1_SCL                 | O    | I2C 串行时钟信号                             |
| 38    | SERIAL_1_RX               | I    | UART 1 RX (Receive Data)                     |
| 39    | CAN_L_2                   | I/O  | FMU CAN Low 信号驱动                         |
| 40    | SERIAL_1_TX               | O    | UART 1 TX (Transmit Data)                    |
| 41    | CAN_H_2                   | I/O  | FMU CAN High 信号驱动                        |
| 42    | SERIAL_1_RTS              |      | UART 1 RTS (Request To Send)                 |
| 43    | VDD_5V_PERIPH_OC          | I    | 外部电源错误状态信息                         |
| 44    | SERIAL_1_CTS              |      | UART 1 CTS (Clear To Send)                   |
| 45    | VDD_5V_HIPOWER_OC         | I    | 高能外部供电错误状态信息                     |
| 46    | IO_USART_1_TX             | O    | I/O USART 1 TX                               |
| 47    | BATT_VOLTAGE_SENS_PROT    | AI   | 主要电池的电压感应                           |
| 48    | IO_USART1_RX_SPECTRUM_DSM | O    | Spectrum 接收机信号                          |
| 49    | BATT_CURRENT_SENS_PROT    | AI   | 主电源的电流感应                             |
| 50    | FMU_CH1_PROT              | O    | I/O PWM 输出通道 1                           |
| 51    | SPI_EXT_MOSI              | O    | 外部 SPI ，仅用于调试                        |
| 52    | FMU_CH2_PROT              | O    | I/O PWM 输出通道 2                           |
| 53    | VDD_SERVO                 | I    | 伺服 VDD，  监控伺服集线器                   |
| 54    | FMU_CH3_PROT              | O    | I/O PWM 输出通道 3                           |
| 55    | VDD_BRICK_VALID           | I    | 主要电源供电有效信号                         |
| 56    | FMU_CH4_PROT              | O    | I/O PWM 输出通道 4                           |
| 57    | VDD_BACKUP_VALID          | I    | 备用电源供电有效信号                         |
| 58    | FMU_CH5_PROT              | O    | I/O PWM 输出通道 5                           |
| 59    | VBUS_VALID                | I    | USB 集线器有效信号                           |
| 60    | FMU_CH6_PROT              | O    | I/O PWM 输出通道 6                           |
| 61    | VDD_5V_IN_PROT            | I    | 从电源系统输出到 FMU 的主要供电              |
| 62    | PPM_SBUS_PROT             | I    | PPM / S.Bus 信号输入                         |
| 63    | VDD_5V_IN_PROT            | I    | 从电源系统输出到 FMU 的主要供电              |
| 64    | S.BUS_OUT                 | O    | S.Bus 信号输出                               |
| 65    | IO_VDD_5V5                | O    | IO VDD 5.5 V                                 |
| 66    | IO_CH8_PROT               | O    | I/O PWM 输出通道 8                           |
| 67    | SPI_EXT_MISO              | I    | 外部 SPI，仅用于调试                         |
| 68    | IO_CH7_PROT               | O    | I/O PWM 输出通道 7                           |
| 69    | IO_SWDIO                  | I/O  | I/O 串行数据收发                             |
| 70    | IO_CH6_PROT               | O    | I/O PWM 输出通道 6                           |
| 71    | IO_SWCLK                  | O    | I/O 串行时钟信号                             |
| 72    | IO_CH5_PROT               | O    | I/O PWM 输出通道 5                           |
| 73    | SPI_EXT_SCK               | O    | 外部 SPI，仅用于调试                         |
| 74    | IO_CH4_PROT               | O    | I/O PWM 输出通道 4                           |
| 75    | IO_!RESET                 | I    | I/O 重启引脚                                 |
| 76    | IO_CH3_PROT               | O    | I/O PWM 输出通道 3                           |
| 77    | CAN_L_1                   | I/O  | FMU CAN Low 信号驱动                         |
| 78    | IO_CH2_PROT               | O    | I/O PWM 输出通道 2                           |
| 79    | CAN_H_1                   | I/O  | FMU CAN High 信号驱动                        |
| 80    | IO_CH1_PROT               | O    | I/O PWM 输出通道 1                           |





### 串行接口参数



#### 接口面板和针脚标号

------

![](Z:\9-27截至技术文档整理\待完善\技术参数手册\assets\Ports Sequence.svg)







#### SERIAL 1 / UART 1 | 连接器：`TELEM1`

------



| Pin # | Name              | 方向 | 电压              | 导线颜色     | 说明                         |
| ----- | ----------------- | ---- | ----------------- | ------------ | ---------------------------- |
| 1     | VCC_5V            | OUT  | 5 V               | RED/GRAY     | VCC                          |
| 2     | SERIAL_1_TX       | OUT  | 3.3 V - 5.0 V TTL | YELLOW/BLACK | UART 1 TX (Transmit Data)    |
| 3     | SERIAL_1_RX       | IN   | 3.3 V - 5.0 V TTL | GREEN/BLACK  | UART 1 RX (Receive Data)     |
| 4     | SERIAL_1_CTS (TX) | OUT  | 3.3 V - 5.0 V TTL | GRAY/BLACK   | UART 1 CTS (Clear To Send)   |
| 5     | SERIAL_1_RTS (RX) | IN   | 3.3 V - 5.0 V TTL | GRAY/BLACK   | UART 1 RTS (Request To Send) |
| 6     | GND               |      | GND               | BLACK        | GND                          |





#### SERIAL 2 / UART 2 | 连接器：`TELEM2`

------



| Pin # | Name              | 方向 | 电压              | 导线颜色     | 说明                         |
| ----- | ----------------- | ---- | ----------------- | ------------ | ---------------------------- |
| 1     | VCC_5V            | OUT  | 5 V               | RED/GRAY     | VCC                          |
| 2     | SERIAL_2_TX       | OUT  | 3.3 V - 5.0 V TTL | YELLOW/BLACK | UART 2 TX (Transmit Data)    |
| 3     | SERIAL_2_RX       | IN   | 3.3 V - 5.0 V TTL | GREEN/BLACK  | UART 2 RX (Receive Data)     |
| 4     | SERIAL_2_CTS (TX) | OUT  | 3.3 V - 5.0 V TTL | GRAY/BLACK   | UART 2 CTS (Clear To Send)   |
| 5     | SERIAL_2_RTS (RX) | IN   | 3.3 V - 5.0 V TTL | GRAY/BLACK   | UART 2 RTS (Request To Send) |
| 6     | GND               |      | GND               | BLACK        | GND                          |





#### SERIAL 3 / UART 3 (GPS) / I2C 1 | 连接器：`GPS1`

------



| Pin # | Name              | 方向   | 电压              | 导线颜色 | 说明                            |
| ----- | ----------------- | ------ | ----------------- | -------- | ------------------------------- |
| 1     | VCC_5V            | IN     | 5 V               | RED      | VCC Power Supply To GPS From AP |
| 3     | SERIAL_3_TX       | OUT    | 3.3 V - 5.0 V TTL | BLACK    | UART 3 TX (Transmit Data)       |
| 2     | SERIAL_3_RX       | IN     | 3.3 V - 5.0 V TTL | BLACK    | UART 3 RX (Receive Data)        |
| 4     | I2C_1_SCL         | IN     | 3.3 V             | BLACK    | I2C 1 Clock Signal              |
| 5     | I2C_1_SDA         | IN/OUT | 3.3 V             | BLACK    | I2C 1 Serial Data               |
| 6     | BUTTON            |        | GND               | BLACK    | Signal shorted to GND on press  |
| 7     | IO_LED_SAFET_PROT |        | GND               | BLACK    | LED Driver For Safety Button    |
| 8     | GND               |        | GND               | BLACK    | GND                             |





#### SERIAL 4 / UART 4 / I2C 2 | 连接器：`GPS2`

------



| Pin # | Name        | 方向 | 电压              | 导线颜色     | 说明                            |
| ----- | ----------- | ---- | ----------------- | ------------ | ------------------------------- |
| 1     | VCC_5V      | OUT  | 5 V               | RED/GRAY     | VCC Power Supply To GPS From AP |
| 2     | SERIAL_4_TX | OUT  | 3.3 V - 5.0 V TTL | YELLOW/BLACK | UART 4 TX (Transmit Data)       |
| 3     | SERIAL_4_RX | IN   | 3.3 V - 5.0 V TTL | GREEN/BLACK  | UART 4 RX (Receive Data)        |
| 4     | I2C_2_SCL   | OUT  | 3.3 V - 5.0 V     | GRAY/BLACK   | I2C 2 Clock Signal              |
| 5     | I2C_2_SDA   | IN   | 3.3 V - 5.0 V     | GRAY/BLACK   | I2C 2 Serial Data               |
| 6     | GND         |      | GND               | BLACK        | GND                             |





#### SERIAL 5 / UART 5 (Debug Console) / S.Bus OUT | 连接器：`CONS` `SBUSo` 

------



| Pin #     | Name        | 方向 | 电压              | 导线颜色 | 说明                      |
| --------- | ----------- | ---- | ----------------- | -------- | ------------------------- |
| 1 `SBUSo` | S.Bus_Out   | OUT  |                   |          | S.Bus Signal Output       |
| 2 `CONS`  | SERIAL_5_TX | OUT  | 3.3 V - 5.0 V TTL |          | UART 5 TX (Transmit Data) |
| 3 `SBUSo` | VDD_SERVO   | OUT  | Servo Voltage     |          |                           |
| 4 `CONS`  | SERIAL_5_RX | IN   | 3.3 V - 5.0 V TTL |          | UART 5 RX (Receive Data)  |
| 5 `SBUSo` | GND         |      | GND               |          | GND                       |
| 6 `CONS`  | GND         |      | GND               |          | GND                       |





#### HMI (蜂鸣器 / USB / LED)  | 连接器：`USB`

------



| Pin # | Name          | 方向   | 电压            | 导线颜色    | 说明                          |
| ----- | ------------- | ------ | --------------- | ----------- | ----------------------------- |
| 1     | V BUS         | OUT    | 5 V             | RED/GRAY    | USB V BUS                     |
| 2     | OTG_DP1       | IN/OUT | 3.3 V           | GREEN/BLACK | USB Data Positive (D+)        |
| 3     | OTG_DM1       | IN/OUT | 3.3 V           | RED/BLACK   | USB Data Minus (D-)           |
| 4     | GND           |        | GND             | BLACK       | GND                           |
| 5     | BUZZER_OUT    | OUT    | Battery Voltage | GRAY/BLACK  | VBAT (8.4 - 42 V)             |
| 6     | FMU_LED_AMBER | OUT    |                 | BLACK       | Boot / Error LED (FW updates) |





#### I2C 2 | 连接器：`I2C 2`

------



| Pin # | Name      | 方向   | 电压            | 导线颜色    | 说明                              |
| ----- | --------- | ------ | --------------- | ----------- | --------------------------------- |
| 1     | VCC_5V    | OUT    | 5 V             | RED/GRAY    | VCC Power Supply                  |
| 2     | I2C_2_SCL | IN/OUT | 3.3 V (PULLUPS) | BLUE/BLACK  | I2C 2 Clock Signal, Pull-up on AP |
| 3     | I2C_2_SDA | IN/OUT | 3.3 V (PULLUPS) | GREEN/BLACK | I2C 2 Serial Data, Pull-up on AP  |
| 4     | GND       |        | GND             | BLACK       | GND                               |





#### 主要电源 POWER 1 | 连接器：`POWER1`

------



| Pin # | Name                      | 方向 | 电压  | 导线颜色 | 说明                          |
| ----- | ------------------------- | ---- | ----- | -------- | ----------------------------- |
| 1     | VDD_5V_BRICK              | IN   | 5 V   | RED/GRAY | Supply To AP from Power Brick |
| 2     | VDD_5V_BRICK              | IN   | 5 V   | RED/GRAY | Supply To AP from Power Brick |
| 3     | BATT_CURRENT_SENS_PROT    |      | 3.3 V | BLACK    | Battery Current Connecter     |
| 4     | BATT_CURRENT_VOLTAGE_PROT | IN   | 3.3 V | BLACK    | Battery Voltage Connecter     |
| 5     | GND                       |      | GND   | BLACK    | GND                           |
| 6     | GND                       |      | GND   | BLACK    | GND                           |





#### 备用电源 POWER 2 | 连接器：`POWER2`

------



| Pin # | Name                  | 方向 | 电压  | 导线颜色 | 说明                          |
| ----- | --------------------- | ---- | ----- | -------- | ----------------------------- |
| 1     | VDD_5V_BRICK          | IN   | 5 V   | RED/GRAY | Supply To AP from Power Brick |
| 2     | VDD_5V_BRICK          | IN   | 5 V   | RED/GRAY | Supply To AP from Power Brick |
| 3     | AUX_BATT_CURRENT_SENS |      | 3.3 V | BLACK    | Aux Battery Current Connecter |
| 4     | AUX_BATT_VOLTAGE_SENS | IN   | 3.3 V | BLACK    | Aux Battery Voltage Connecter |
| 5     | GND                   |      | GND   | BLACK    | GND Connection                |
| 6     | GND                   |      | GND   | BLACK    | GND                           |





#### CAN 1 | 连接器：`CAN1`

------



| Pin # | Name    | 方向   | 电压 | 导线颜色     | 说明             |
| ----- | ------- | ------ | ---- | ------------ | ---------------- |
| 1     | VCC_5V  | OUT    | 5 V  | RED/GRAY     | VCC Power Supply |
| 2     | CAN_H_1 | IN/OUT | 12 V | YELLOW/BLACK | CAN High         |
| 3     | CAN_L_1 | IN/OUT | 12 V | GREEN/BLACK  | CAN Low          |
| 4     | GND     |        | GND  | BLACK        | GND              |





#### CAN 2 | 连接器： `CAN2`

------



| Pin # | Name    | 方向   | 电压 | 导线颜色     | 说明             |
| ----- | ------- | ------ | ---- | ------------ | ---------------- |
| 1     | VCC_5V  | OUT    | 5 V  | RED/GRAY     | VCC Power Supply |
| 2     | CAN_H_2 | IN/OUT | 12 V | YELLOW/BLACK | CAN High         |
| 3     | CAN_L_2 | IN/OUT | 12 V | GREEN/BLACK  | CAN Low          |
| 4     | GND     |        | GND  | BLACK        | GND              |





#### ADC | 连接器：`ADC`

------



| Pin # | Name             | 方向 | 电压 | 导线颜色 | 说明         |
| ----- | ---------------- | ---- | ---- | -------- | ------------ |
| 1     | VDD_5V_PRES      | OUT  | 5 V  | RED      | Power Supply |
| 2     | PRESSURE_SENS_IN | IN   |      | BLACK    |              |
| 3     | GND              |      | GND  | BLACK    | GND          |





#### IO USART 1 / DSM  | 连接器：`SPKT`

------



| Pin # | Name                      | 方向 | 电压  | 导线颜色 | 说明                     |
| ----- | ------------------------- | ---- | ----- | -------- | ------------------------ |
| 1     | IO_USART1_RX_SPECTRUM_DSM | IN   |       |          | IO USART 1 RX, DSM INPUT |
| 2     | GND                       |      | GND   |          | GND                      |
| 3     | VDD_3V3_Spektrum          | OUT  | 3.3 V |          | Independent Power Supply |





#### CPPM / S.BUS / SERVO SYSTEM | 连接器：`RCIN` `MAIN OUT` `AUX OUT`

------



| Pin #  | Name          | 方向   | 电压                                 | 说明               |
| ------ | ------------- | ------ | ------------------------------------ | ------------------ |
| S - 1  | FMU_CH1_PROT  | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 2  | FMU_CH2_PROT  | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 3  | FMU_CH3_PROT  | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 4  | FMU_CH4_PROT  | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 5  | FMU_CH5_PROT  | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 6  | FMU_CH6_PROT  | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 7  | IO_CH1_PROT   | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 8  | IO_CH2_PROT   | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 9  | IO_CH3_PROT   | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 10 | IO_CH4_PROT   | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 11 | IO_CH5_PROT   | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 12 | IO_CH6_PROT   | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 13 | IO_CH7_PROT   | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 14 | IO_CH8_PROT   | OUT    | 3.3 V Servo Signal, Servo Rail Power | PWM Signal         |
| S - 15 | PPM_SBUS_PROT | IN/OUT | 3.3 V / 4.5 V Powered                | PPM / S.Bus Signal |







## Pixhawk2.1 （The Cube）系统结构





### 系统架构

------

Pixhawk2.1 （The Cube） 延续了上一代 PX4 FMU (飞行控制单元) +PX4 I/O (输入输出单元) 设计架构，把两个功能性模块集成在一个物理模块中。



![](Z:\9-27截至技术文档整理\待完善\技术参数手册\assets/Pixhawk2.1 System Structure.svg)







#### The Cube FMU 主板

------

- STM32F427 (MCU)；2 MiB Flash (闪存)，256+4 KiB 的 SRAM (静态随机存取存储器) , 包含 64 KiB CCM (core coupled memory)
- 板载的 16 KiB SPI FRAM (磁性随机存取存储器)
- MPU9250 (集成的加速计+陀螺仪+磁罗盘)
- MS5611 (气压计)
- 所有传感器均通过 SPI 连接
- 兼容 SDIO 的 microSD Card 接口



#### The Cube IMU 减震主板

------

- LSM303D (集成的加速计+磁力计)
- L3GD20 (陀螺仪)
- MPU9250 (集成的加速计+陀螺仪+磁力计)
- MS5611 (气压计)
- 所有传感器通过 SPI 连接



#### 接口

------

- 14个 PWM 伺服输出 (I/O x8，FMU x6)
- Spektrum DSM® 信号输入，Futaba S.Bus® 信号输入，PPM 信号输入
- Analogue / PWM RSSI 信号输入
- S.Bus 伺服信号输出
- 5 个通用串行接口，其中两个带有硬件流控制
- 2 个 I2C 接口
- 1 个 SPI 接口 (不带缓冲，只为短线提供，不建议使用)
- 2 个 CAN 标准总线接口
- 3 个模拟信号输入
- 压电蜂鸣器驱动 (安装在载板上)
- RGB LED (由 I2C 驱动 ，仅限外部连接)
- 安全开关 / LED 指示灯



#### PWM 输出

------

所有的 PWM 输出都通过 ESD (静电释放) 保护，而且硬件设计上使它们不会因为一般的连接错误而导致损坏。这些伺服驱动可在 2 m 以上的 26 AWG 伺服线上驱动一个 50 pF 的伺服输入。

PWM 输出也可以设置成独立的 GPIO。请注意：它不是高能输出！PWM 驱动是专门为了驱动伺服装置和类似的逻辑输入，而不是继电器或者 LED 指示灯。

##### I/O PWM 输出 `MAIN OUT`

-  The Cube 的 I/O 连接了 8 个 PWM 输出，即便 FMU 不工作的状态下 (如故障保护或是手动模式)，也可由 I/O 接管的 R/C 输入信号直接控制他们。
- I/O 下的 8 个 PMW 输出分成三组，支持多种更新频率 (最高可达 400 Hz) 的 PWM 信号。其中一组带有 4 个输出，另外两组分别带有 2 个输出。

##### FMU PWM 输出 `AUX OUT`

- FMU 一共连接了 6 个 PWM 输出，减少了更新延迟时间。在故障保护模式下 I/O 无法控制这组输出。
- FMU 下的 6 个 PMW 输出分成两组，支持多种更新频率 (最高可达 400 Hz) 的 PWM 信号。其中一组带有 4 个输出，另外一组带有 2 个输出。



#### 外接接口

------

The Cube 使用 80 个引脚的 DF17 接口连接器来连接载板，所有的外部设备均通过载板来连接。



#### The Cube Standard Carrier Board

------

标准载板为每一个外部端口都设置了一个连接器 (只有少数几个接口是合并在一个连接器上的)。

| 连接器    | 接口     | 携带           |
| --------- | -------- | -------------- |
| `TELEM 1` | Serial 1 | UART 1         |
| `TELEM 2` | Serial 2 | UART 2         |
| `GPS 1`   | Serial 3 | UART 3 / I2C 2 |
| `GPS 2`   | Serial 4 | UART 4 / I2C 1 |
| `CONS`    | Serial 5 | UART 5         |
| `I2C 2`   | I2C 2    | I2C 2          |



- 一共提供了 5 个串口；`TELEM 1` 上的串口 1 和 `TELEM 2` 上的串口 2 带有硬件流控制； `GPS 1` 上带有串口 3，同时这个接口也有安全开关 (包含安全 LED 灯) 和可连接罗盘与 RGB LED 灯的 I2C 总线 I2C 1； `GPS 2` 上的串口 4 同样拥有 I2C 接口 (这条 I2C 总线与 `I2C 2` 接口的 I2C 2 总线并线)，因此系统支持两个罗盘模块同时连接； `CONS` 接口分配给串口 5 。这些串口可承载 3.3 V 最高 5 V 的 COMS 逻辑电平，拥有 ESD (静电释放) 保护。
- I2C 接口与直接驱动，不带缓冲，驱动设置在 FMU 板上，最高可承载 3.3 V 电压。`GPS 1` 上的是 I2C 1 总线， `I2C 2` 与 `GPS 2` 是同一条 I2C 2 总线。
- SPI 接口没有缓冲，它只能用短的线缆连接，信号是 3.3 V 最高兼容 5 V 的 CMOS 逻辑电平。SPI 在标准载板上作为测试点 (带有一个 CS 和一个 INT 引脚)。
- 模电接口 1 - 3 限制最高为 12 V 的输入，一般工作在 0 - 3.3 V 的范围之间。
- RSSI (接收的信号强度指示) 输入要么支持 PWM，要么支持模电 RSSI。这个输入和 S.Bus 输出共享一个引脚，且在同一个时间只允许连接一个。
- 设置有 CPPM，S.Bus 信号输入接口 `RCIN` 和 Spektrum DSM 信号输入接口 `SKPT`。
- CAN 接口 `CAN 1` `CAN 2` 是标准的 CAN 总线接口，CAN 总线另一端连接到 FMU 主板，驱动设置在 FMU 上。
- 压电接口 `ADC` 将大多数的压电元件控制在 5 - 300 nF 的范围内，最高可承载 3.3 V 的电压。



#### 传感器

------

在 The Cube 上，所有飞行传感器均通过 SPI 连接。在 FMU 主板上，我们连接了一个 MPU9250 (陀螺仪+加速计+磁力计) 和一个 MS5611 (气压计)。在减震的 IMU 主板上我们连接了 L3GD20 (陀螺仪) 和 LSM303D (加速器+磁力仪)，另一个 MPU9250，MS5611 也在 SPI 下运行。

底部 FMU 主板上的传感器和减震  IMU 主板上的传感器分别运行在单独的总线上。所有传感器的数据准备信号直接发送，不被路由。





### 电源架构

------

The Cube 把电能管理模块从 FMU 中分离出来，独立存在；伺服轨道不作为 FMU 备用电能的首要来源，电源架构而是把伺服轨道的电能留给了 I/O 作为最后的故障避险；电源架构为 FMU 和 I/O 分配 3.3 V 的电压供给。

- 为 FMU 和传感器提供分开的数字和模拟电源。
- 为 I/O 提供了备用电源以防 FMU 失效。



![](Z:\9-27截至技术文档整理\待完善\技术参数手册\assets\System Power Distribution_zh.svg)



#### 电源管理模块 (与 FMU 分离)

------

The Cube 电源架构的主要功能点：

- 给飞控和外接设备单一，独立的 5 V 电能供给。
- 允许使用兼容的两块电源模块混合供电，同时可进行电流和电压监控。
- 低电耗和良好的散热。
- 为外接设备提供电量分配和监控。
- 常规连线错误保护，电压不足和过载保护，电流过载保护，过热防护。
- 掉电察觉和恢复。



#### FMU 和 I/O 电力分配

------

FMU 和 I/O 都是在 3.3 V 的电压下运行，它们分别有专用的双通道稳压器。每一个稳压器配有调整自身内部上电和关断顺序的上电复位输出。

在大多数的情况下，FMU 可以使用主次双路电源模块接口或是其他备用电轨 (USB 电源输入) 来供电。在开发测试的场景下，从 USB 提取电能，就不需要 BEC (免电池电路) 或是相似的伺服电源 (伺服装置本身也需要额外的电能)。

I/O 芯片不仅可接受电源模块轨道主要供电的电力输入，还可接受来自伺服轨道最高 10.5 V 的电力。The Cube 支持标准的 5 V 和有限的高压 (最高到 10.5 V ) 伺服供能，允许 I/O 在所有情况下 (包括主要供电断电或是受干扰的情况) 转移到伺服装置供能。



#### 电能轨道

------

电能可以通过 USB 或是通过电源模块接口或是第二电源模块接口传输给 The Cube 。每一个电源都有翻转电极保护和从其他源头来的备用电能。FMU + I/O 的功率预算在 250 mA。包括所有的 LED 灯和压电式蜂鸣器在内，外接设备的所有电源总和限制在 2.5 A。



#### 电源模块 POWER 1 输入

------

使用电源模块轨道作为 The Cube 主要供能更为合适，当有电源模块供电的情况下系统会优先选择来自电源模块的电力。



#### 备用电源模块 POWER 2 输入 (备用电供能)

------

The Cube 拥有一个备用电源模块接口，这个接口型号和主电源模块输入一样。当有辅助电源模块接入电力系统进行供电时，The Cube 和外围设备可从电力系统提取总额最高为 2.75 A 的电流，前提是电源模块或是其他路电源可以支持负载所需的电流。电源模块轨道的输入电压若高于 5.7 V 时，该轨道的电力会被系统屏蔽。要注意，The Cube 不会给伺服装置供电。



#### 伺服轨道输入

------

I/O 芯片不仅可接受电源模块轨道的电力输入，还可接受来自伺服轨道最高 10.5 V 的电力；即便当其他两种重要电源（主次电源模块和 USB 供电）失效时，伺服轨道的电能依然可维持 I/O 的工作，机器自动转为人工操作模式，地面可在自驾系统失败时获得人工控制权，通过 R/C 输入来控制舵面。这只对固定翼飞机有用，而且需要在 I/O 芯片正确配对的情况下使用。

> 注意：FMU 和外接装置不接收伺服轨道的供电。



#### USB 电源输入

------

USB 电源可以用来支持软件更新，测试和开发。USB 电源供给外接设备的接口用来测试，然而总体的电流消耗会被限制在 500 mA，包括外接设备，以防止 USB 接口过载。



#### 所有电力轨道的性能

------

当超过一种电源被连接了以后，系统会从已存在的电源中筛选符合要求的最高优先级的电源为设备供电 (优先级参考下表)，即：当高优先级轨道失效时，系统则会向下抽取低级别的电能轨道维持工作；当高级别的轨道恢复工作时，系统立即转移到高优先级别电能轨道供电。当电源轨道的电力输入在极限状态之外，保护范围之内，此条电源轨道不会被提取任何电力 (无法支持系统运行)，系统也不会受到它的损害。

| 供电轨道 | 优先级    | 正常运行额定值 | 极限状态       | 保护范围   |
| -------- | --------- | -------------- | -------------- | ---------- |
| POWER 1  | 高 (主要) | 4.8 V - 5.4 V  | 4.1 V - 5.7 V  | 0 V - 20 V |
| POWER 2  | 高 (辅助) | 4.8 V - 5.4 V  | 4.1 V - 5.7 V  | 0 V - 20 V |
| SERVO    | 中 (应急) | 4.8 V - 5.4 V  | 4.1 V - 10.5 V | 0 V - 20 V |
| USB      | 低 (可选) | 4.8 V - 5.4 V  | 4.1 V - 5.7 V  | 0 V - 6 V  |

> 伺服轨道设置有最高 10 V 的手动过载，若无电源模块输入，伺服轨道在 5.7 V 以上电压输入时无法为系统供电。FMU 和外接装置不接收伺服连接器供电。



各供电轨道为设备的供电能力也可如下所示：

| 供电轨道 | FMU       | I/O        | 外接设备                |
| -------- | --------- | ---------- | ----------------------- |
| POWER 1  | 4 - 5.7 V | 4 - 5.7 V  | 4 - 5.7 V，2.5 A (MAX)  |
| POWER 2  | 4 - 5.7 V | 4 - 5.7 V  | 4 - 5.7 V，2.5 A (MAX)  |
| SERVO    | NIL       | 4 - 10.5 V | NIL                     |
| USB      | 4 - 5.7 V | 4 - 5.7 V  | 4 - 5.7 V，250 mA (MAX) |



#### 外接设备

------

##### 外接电源

The Cube 提供电能路由，低压过载的检测和保护，电源过滤，电流限制和外接设备瞬变压制。外接电能的电源输出带有 ESD 保护和 EMI 过滤，电源架构的保护机制保证了输出给外接设备的电压不超过 5.5 V，当可用电源提供给外部的电压掉到 2.7 V 以下或是超过 5.7 V 以上时，系统会自动断开提供给外围设备的电源连接。

外接电源被分为两组，每一组电源的通断都由软件控制：

1. 串口 1 `TELEM 1` 有独立的 1.5 A 电流限制，电流峰值不超过 2 A。`TELEM 1` 的供电能力对于一个 30 dBm 的遥测发射器在合理的功率下运行已经足够了。这个输出被 EMI 过滤而且电能从 USB 或从电源模块直接输入。
2. 所有其他的外接设备都共享最高 1 A 的电流限制和一个独立的电源开关。这些端口加起来的顶峰电流不应该超过 1.5 A。

关于无线接收机设备的接口：`SKTM` 接口和其他组外接电源不一样，它有独立的电源控制器来提供电能，由软件将接口打开才可通电，Spektrum 接收器大约能接收来自 `SKTM` 接口 25 mA 的电量。S.Bus 和 CPPM 接收机可直接从伺服轨道接收电能，它们的设计支持伺服供给电压。



##### 备用电池

系统需要给 FMU 和 I/O 的 RTC (Real Time Clock) 和 SRAM 供电，载板上配备一块备用电池 (纽扣电池) ，这块电池有充足的电能在无故掉电或是其他原因导致空中重启的情况下给 RTC 的后备寄存器和 SRAM 供电，系统短暂掉电而不会丢失数据，等待电能恢复后可继续工作 (这个功能需要设备上运行的软件支持该特性才能起到作用)。载板上的备用电池通过 FMU 3.3 V 的输出轨道进行充电。



##### 电压，电流和故障感应

FMU 可通过两组电源模块测量电池的电压和电流，此外可以在供电轨道上检测未经过 5 V 稳压的电源 (用于检测掉电状态)。I/O 可以检测伺服轨道的电压。

FMU 可以检测外接设备的电源接口是否过载。硬件级的接口锁定可将非法的电源从入口过滤，防止端口持续短路而导致设备受到损坏，FMU 上的软件可在接口恢复正常后为它解锁。在掉电状态下，FMU 低压/过载监视器会提供一个电能输出保持 FMU 始终处于复位状态。



##### EMI 滤波和瞬态抑制 (在标准载板上)

The Cube 在系统的关键点上设置 EMI 电源滤波器，具有高插入损耗的过滤能力。这些过滤器和 TVS 瞬态抑制二极管互相配合来抑制来自外接端口上的电源瞬态变化。

每条电源输入都有反极性保护，防止电源极性反接的错误。

USB 信号通过一个结合的中断/TVS 组合来过滤和中断。

大多数的电子外接设备信号 (所有的 PWM 输出，串口，I2C 端口) 是用 ESD-加强缓冲和特别的串口阻拦电阻来驱动的，从而减少由于瞬变或突发性短路所带来的风险。







## 套件内容





### Pixhawk2.1（The Cube） Standard Edition

------

| 套件内容                               | 数量 |
| -------------------------------------- | ---- |
| The Cube Flight Controller             | x1   |
| The Cube Standard Carrier Board        | x1   |
| 迷你电源模块                           | x1   |
| Micro-SD Card (已提前插入 The Cube 中) | x1   |
| 数传连接线                             | x2   |
| 电源连接线                             | x1   |
| I2C 连接线                             | x1   |
| 蜂鸣器                                 | x1   |
| Micro USB 线                           | x1   |
| GPS1 接口连接线 (带有安全开关)         | x1   |
| GPS2 接口连接线                        | x1   |
| 迷你电源模块连接线                     | x1   |
| I2C 扩展板                             | x1   |
| 装配螺丝 (M2.5*8)                      | x4   |
| 3M 双面胶                              | x9   |



