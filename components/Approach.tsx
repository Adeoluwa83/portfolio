import { AceternityIcon, CanvasRevealEffect, Card } from "./ui/CanvasReaveal";


const Approach = () => {
  return (
      <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center   gap-4 ">
              <Card title="Planning & Strategy " icon={<AceternityIcon order="Phase 1" />}
              desc="We'll collaborate to map out your Website's goal, target audience and key functionalities"
              
              >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
              <Card title=" Development and progress" icon={<AceternityIcon order="Phase 2" />}
              desc="Once we agree on a plan. the next thing is to start the development of your website"
              >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
              <Card title="Development &launch" icon={<AceternityIcon order="phase3" />}
              desc="
The development phase is where the magic happens. It's where ideas take shape, and concepts become concrete.
The launch phase is where your product or feature meets the public. It's a critical moment that requires careful planning and execution.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
                      colors={[[125, 211, 252]]}
                      
          />
          </Card>
          </div>

          </section>
  )
}

export default Approach;
